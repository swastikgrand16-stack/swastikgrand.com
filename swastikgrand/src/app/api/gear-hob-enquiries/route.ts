import { NextRequest, NextResponse } from "next/server";

const maxDrawingSize = 10 * 1024 * 1024;
const rateWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const requestsByIp = new Map<string, { count: number; resetAt: number }>();

function text(form: FormData, key: string, maxLength = 500) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] || character);
}

function createReference() {
  const date = new Date();
  const datePart = `${date.getUTCFullYear().toString().slice(-2)}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;
  return `SGI-${datePart}-${crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase()}`;
}

function isRateLimited(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const record = requestsByIp.get(ip);
  if (!record || record.resetAt <= now) {
    requestsByIp.set(ip, { count: 1, resetAt: now + rateWindowMs });
    return false;
  }
  if (record.count >= maxRequestsPerWindow) return true;
  record.count += 1;
  if (requestsByIp.size > 1000) {
    for (const [key, value] of requestsByIp) if (value.resetAt <= now) requestsByIp.delete(key);
  }
  return false;
}

async function validateDrawing(value: FormDataEntryValue | null) {
  if (!(value instanceof File) || value.size === 0) return { attachment: undefined, error: "" };
  if (value.size > maxDrawingSize) return { attachment: undefined, error: "The drawing must be 10 MB or smaller." };

  const bytes = Buffer.from(await value.arrayBuffer());
  const extension = value.name.toLowerCase().split(".").pop();
  let contentType = "";
  if (bytes.subarray(0, 5).toString() === "%PDF-" && extension === "pdf") contentType = "application/pdf";
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff && ["jpg", "jpeg"].includes(extension || "")) contentType = "image/jpeg";
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) && extension === "png") contentType = "image/png";
  if (!contentType) return { attachment: undefined, error: "Upload a valid PDF, JPG or PNG drawing." };

  const filename = value.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120) || `gear-hob-drawing.${extension}`;
  return { attachment: { filename, content: bytes.toString("base64"), content_type: contentType }, error: "" };
}

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });
  if (isRateLimited(request)) return NextResponse.json({ error: "Too many enquiries. Please try again later." }, { status: 429 });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  if (text(form, "website")) return NextResponse.json({ ok: true });

  const name = text(form, "name", 120);
  const email = text(form, "email", 254);
  const phone = text(form, "phone", 40);
  const quantity = text(form, "quantity", 120);
  if (!name || !email || !quantity || text(form, "privacyAcknowledged") !== "on") {
    return NextResponse.json({ error: "Name, email, quantity, and privacy acknowledgement are required." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { attachment, error: attachmentError } = await validateDrawing(form.get("drawing"));
  if (attachmentError) return NextResponse.json({ error: attachmentError }, { status: 400 });

  const reference = createReference();
  const allFields: [string, string][] = [
    ["Reference", reference],
    ["Gear type", text(form, "gearType", 100)],
    ["Module or diametral pitch", text(form, "moduleOrDp", 100)],
    ["Pitch reference", text(form, "pitchReference", 100)],
    ["Pressure angle", text(form, "pressureAngle", 80)],
    ["Cutter outside diameter", text(form, "outsideDiameter", 100)],
    ["Bore / shank and drive", text(form, "mounting", 160)],
    ["Overall / cutting length", text(form, "lengths", 160)],
    ["Starts and thread hand", text(form, "startsHand", 100)],
    ["Workpiece material and hardness", text(form, "material", 160)],
    ["Preferred HSS grade / coating", text(form, "gradeCoating", 160)],
    ["Accuracy class / inspection", text(form, "accuracy", 160)],
    ["Quantity", quantity],
    ["Destination country", text(form, "country", 100)],
    ["Additional requirements", text(form, "details", 4000)],
  ];
  const fields = allFields.filter(([, value]) => value);
  const gearType = text(form, "gearType", 100);
  const requirement = `HSS gear hob cutter enquiry${gearType ? ` - ${gearType}` : ""}`;
  const details = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const emailRows = [["Product", "HSS Gear Hob Cutter"], ["Name", name], ["Company", text(form, "company", 160) || "Not provided"], ["Email", email || "Not provided"], ["Phone", phone || "Not provided"], ...fields]
    .map(([label, value]) => `<tr><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#68737c;font-size:12px;font-weight:700;text-transform:uppercase;vertical-align:top;width:34%">${escapeHtml(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#202d3b;font-size:14px;line-height:1.5;vertical-align:top">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("");
  const html = `<!doctype html><html><body style="margin:0;background:#f3f5f7;color:#202d3b;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f5f7;padding:28px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e1e6e9"><tr><td style="background:#142333;padding:25px 28px"><div style="color:#fac62b;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase">SWAGIN / SWASTIK GRAND INDUSTRIES</div><div style="color:#ffffff;font-size:24px;font-weight:700;margin-top:12px">Gear hob cutter enquiry</div></td></tr><tr><td style="height:6px;background:#fac62b;font-size:0;line-height:0">&nbsp;</td></tr><tr><td style="padding:28px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e6e9;border-collapse:collapse">${emailRows}</table></td></tr><tr><td style="background:#142333;padding:18px 28px;color:#aebbc3;font-size:11px;line-height:1.6">Swastik Grand Industries · Ludhiana, Punjab, India<br>This message was sent from the website enquiry form.</td></tr></table></td></tr></table></body></html>`;
  const payload = {
    from: process.env.RESEND_FROM_EMAIL || "Swastik Grand Website <onboarding@resend.dev>",
    to: [process.env.RESEND_TO_EMAIL || "info@swastikgrand.com"],
    ...(email ? { reply_to: email } : {}),
    subject: `Website enquiry: HSS Gear Hob Cutter - ${requirement}`,
    html,
    text: [`Product: HSS Gear Hob Cutter`, `Requirement: ${requirement}`, `Name: ${name}`, `Email: ${email || "Not provided"}`, `Phone: ${phone || "Not provided"}`, `Company: ${text(form, "company", 160) || "Not provided"}`, details].filter(Boolean).join("\n"),
    ...(attachment ? { attachments: [attachment] } : {}),
  };

  const recipientEmail = process.env.RESEND_TO_EMAIL || "info@swastikgrand.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Swastik Grand Website <onboarding@resend.dev>";

  const businessEmailPromise = fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const customerEmailPromise = email
    ? fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          reply_to: recipientEmail,
          subject: `We received your enquiry: HSS Gear Hob Cutter - Swastik Grand Industries`,
          html: `<!doctype html><html><body style="margin:0;background:#f3f5f7;color:#202d3b;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f5f7;padding:28px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e1e6e9"><tr><td style="background:#142333;padding:25px 28px"><div style="color:#fac62b;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase">SWAGIN / SWASTIK GRAND INDUSTRIES</div><div style="color:#ffffff;font-size:24px;font-weight:700;margin-top:12px">Gear Hob Enquiry Received</div></td></tr><tr><td style="height:6px;background:#fac62b;font-size:0;line-height:0">&nbsp;</td></tr><tr><td style="padding:28px"><p style="margin:0 0 16px;color:#202d3b;font-size:16px;line-height:1.6;font-weight:600">Dear ${escapeHtml(name)},</p><p style="margin:0 0 16px;color:#4a5560;font-size:14px;line-height:1.6">Thank you for contacting <strong>Swastik Grand Industries</strong>. We have successfully received your technical specifications for <strong>HSS Gear Hob Cutters</strong>.</p><p style="margin:0 0 20px;color:#4a5560;font-size:14px;line-height:1.6">Our engineering team is evaluating your parameters and will get back to you with custom manufacturing lead time and pricing shortly.</p><p style="margin:0 0 20px;color:#4a5560;font-size:14px;line-height:1.6">Your reference number is <strong>${escapeHtml(reference)}</strong>.</p><div style="margin:24px 0 12px;color:#142333;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em">Submitted specifications:</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e6e9eb;border-collapse:collapse">${emailRows}</table><div style="margin-top:28px;padding:18px 20px;background:#f8fafb;border-left:4px solid #fac62b"><div style="color:#142333;font-size:13px;font-weight:700;margin-bottom:6px">Need immediate assistance?</div><div style="color:#4a5560;font-size:13px;line-height:1.6">Call / WhatsApp: <a href="https://wa.me/919888038583" style="color:#142333;font-weight:700;text-decoration:none">+91 98880 38583</a><br>Email: <a href="mailto:${escapeHtml(recipientEmail)}" style="color:#142333;font-weight:700;text-decoration:none">${escapeHtml(recipientEmail)}</a></div></div></td></tr><tr><td style="background:#142333;padding:18px 28px;color:#aebbc3;font-size:11px;line-height:1.6">Swastik Grand Industries · #1916, Street No. 36, Janta Nagar, Ludhiana, Punjab, India - 141003<br><span style="color:#fac62b">Manufacturers & Exporters of Industrial Threading & Cutting Tools</span></td></tr></table></td></tr></table></body></html>`,
          text: [
            `Dear ${name},`,
            "",
            "Thank you for contacting Swastik Grand Industries. We have received your technical specifications for HSS Gear Hob Cutters.",
            `Your reference number is: ${reference}.`,
            "Our engineering team is reviewing your requirements and will get back to you shortly.",
            "",
            "Submitted specifications:",
            `Product: HSS Gear Hob Cutter`,
            `Quantity: ${quantity}`,
            `Company: ${text(form, "company", 160) || "Not provided"}`,
            details,
            "",
            "Direct contact:",
            "Phone / WhatsApp: +91 98880 38583",
            `Email: ${recipientEmail}`,
            "Website: https://swastikgrand.com",
            "",
            "Swastik Grand Industries, Ludhiana, Punjab, India",
          ].filter(Boolean).join("\n"),
        }),
      })
    : Promise.reject(new Error("An email address is required for the confirmation message."));

  let emailResponses: Response[];
  try {
    emailResponses = await Promise.all([businessEmailPromise, customerEmailPromise]);
  } catch (error) {
    console.error("Resend request failed:", error);
    return NextResponse.json({ error: "The enquiry could not be sent. Please try again or contact us directly." }, { status: 502 });
  }
  if (emailResponses.some((response) => !response.ok)) {
    console.error("Resend API error:", emailResponses.map((response) => response.status).join(", "));
    return NextResponse.json({ error: "The enquiry could not be sent. Please try again or contact us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, reference });
}