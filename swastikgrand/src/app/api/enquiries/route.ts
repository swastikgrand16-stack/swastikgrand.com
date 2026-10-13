import { NextResponse } from "next/server";

type EnquiryPayload = {
  enquiryType?: string;
  enquiryMode?: string;
  name?: string;
  email?: string;
  country?: string;
  company?: string;
  phone?: string;
  requirement?: string;
  details?: string;
  product?: string;
  productName?: string;
  industry?: string;
  thread?: string;
  quantity?: string;
  material?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] || character);
}

function createReference() {
  const date = new Date();
  const datePart = `${date.getUTCFullYear().toString().slice(-2)}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;
  return `SGI-${datePart}-${crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase()}`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL || "info@swastikgrand.com";
  const from = process.env.RESEND_FROM_EMAIL || "Swastik Grand Website <onboarding@resend.dev>";

  if (!apiKey) return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });

  let payload: EnquiryPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  const enquiryType = clean(payload.enquiryType || payload.enquiryMode) || "Standard";
  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const productName = clean(payload.productName || payload.product);
  const thread = clean(payload.thread);
  const quantity = clean(payload.quantity);
  const material = clean(payload.material);
  const industry = clean(payload.industry);
  const country = clean(payload.country);
  const company = clean(payload.company);
  const details = clean(payload.details);
  const rawRequirement = clean(payload.requirement);

  const requirement = rawRequirement || [productName, thread].filter(Boolean).join(" - ") || "Tooling enquiry";

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
  }

  const reference = createReference();
  const fields: [string, string][] = [
    ["Reference", reference],
    productName ? ["Product", productName] : null,
    ["Enquiry type", enquiryType],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    company ? ["Company", company] : null,
    country ? ["Country / location", country] : null,
    industry ? ["Industry / application", industry] : null,
    thread ? ["Thread size & pitch", thread] : null,
    quantity ? ["Quantity", quantity] : null,
    material ? ["Workpiece material", material] : null,
    rawRequirement && rawRequirement !== requirement ? ["Requirement", rawRequirement] : null,
    details ? ["Additional requirements", details] : null,
  ].filter((item): item is [string, string] => Boolean(item));

  const emailRows = fields
    .map(([label, value]) => `<tr><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#68737c;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;width:34%">${escapeHtml(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#202d3b;font-size:14px;line-height:1.5;vertical-align:top">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("");

  const adminHtml = `<!doctype html><html><body style="margin:0;background:#f3f5f7;color:#202d3b;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f5f7;padding:28px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e1e6e9"><tr><td style="background:#142333;padding:25px 28px"><div style="color:#fac62b;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase">SWAGIN / SWASTIK GRAND INDUSTRIES</div><div style="color:#ffffff;font-size:24px;font-weight:700;margin-top:12px">New website enquiry</div></td></tr><tr><td style="height:6px;background:#fac62b;font-size:0;line-height:0">&nbsp;</td></tr><tr><td style="padding:28px"><p style="margin:0 0 20px;color:#68737c;font-size:14px;line-height:1.6">A new ${escapeHtml(enquiryType.toLowerCase())} enquiry was submitted through the website.</p><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e6e9;border-collapse:collapse">${emailRows}</table><table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:24px"><tr><td style="background:#fac62b;padding:12px 17px"><a href="mailto:${escapeHtml(email)}" style="color:#142333;font-size:13px;font-weight:700;text-decoration:none">Reply to buyer</a></td></tr></table></td></tr><tr><td style="background:#142333;padding:18px 28px;color:#aebbc3;font-size:11px;line-height:1.6">Swastik Grand Industries · Ludhiana, Punjab, India<br><span style="color:#fac62b">This message was sent from the website enquiry form.</span></td></tr></table></td></tr></table></body></html>`;

  const customerHtml = `<!doctype html><html><body style="margin:0;background:#f3f5f7;color:#202d3b;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f5f7;padding:28px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e1e6e9"><tr><td style="background:#142333;padding:25px 28px"><div style="color:#fac62b;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase">SWAGIN / SWASTIK GRAND INDUSTRIES</div><div style="color:#ffffff;font-size:24px;font-weight:700;margin-top:12px">Enquiry Received</div></td></tr><tr><td style="height:6px;background:#fac62b;font-size:0;line-height:0">&nbsp;</td></tr><tr><td style="padding:28px"><p style="margin:0 0 16px;color:#202d3b;font-size:16px;line-height:1.6;font-weight:600">Dear ${escapeHtml(name)},</p><p style="margin:0 0 16px;color:#4a5560;font-size:14px;line-height:1.6">Thank you for reaching out to <strong>Swastik Grand Industries</strong>. We have successfully received your enquiry regarding <strong>${escapeHtml(requirement)}</strong>.</p><p style="margin:0 0 20px;color:#4a5560;font-size:14px;line-height:1.6">Our technical and sales team is reviewing your requirements and will get back to you with pricing, technical specifications, and delivery details shortly.</p><p style="margin:0 0 20px;color:#4a5560;font-size:14px;line-height:1.6">Your reference number is <strong>${escapeHtml(reference)}</strong>.</p><div style="margin:24px 0 12px;color:#142333;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em">Summary of your enquiry:</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e6e9;border-collapse:collapse">${emailRows}</table><div style="margin-top:28px;padding:18px 20px;background:#f8fafb;border-left:4px solid #fac62b"><div style="color:#142333;font-size:13px;font-weight:700;margin-bottom:6px">Need immediate assistance?</div><div style="color:#4a5560;font-size:13px;line-height:1.6">Call / WhatsApp: <a href="https://wa.me/919888038583" style="color:#142333;font-weight:700;text-decoration:none">+91 98880 38583</a><br>Email: <a href="mailto:${escapeHtml(to)}" style="color:#142333;font-weight:700;text-decoration:none">${escapeHtml(to)}</a></div></div></td></tr><tr><td style="background:#142333;padding:18px 28px;color:#aebbc3;font-size:11px;line-height:1.6">Swastik Grand Industries · #1916, Street No. 36, Janta Nagar, Ludhiana, Punjab, India - 141003<br><span style="color:#fac62b">Manufacturers & Exporters of Industrial Threading & Cutting Tools</span></td></tr></table></td></tr></table></body></html>`;

  const adminText = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

  const customerText = [
    `Dear ${name},`,
    "",
    `Thank you for contacting Swastik Grand Industries. We have received your enquiry regarding: ${requirement}.`,
    `Your reference number is: ${reference}.`,
    "Our team is reviewing your requirements and will get back to you shortly.",
    "",
    "Summary of your enquiry:",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Direct contact:",
    "Phone / WhatsApp: +91 98880 38583",
    `Email: ${to}`,
    "Website: https://swastikgrand.com",
    "",
    "Swastik Grand Industries, Ludhiana, Punjab, India",
  ].join("\n");

  const adminSubject = productName
    ? `Product enquiry: ${productName} (${enquiryType}) - ${requirement}`
    : `Website enquiry: ${enquiryType} - ${requirement}`;

  const adminEmailPromise = fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: adminSubject,
      html: adminHtml,
      text: adminText,
    }),
  });

  const customerEmailPromise = fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [email],
      reply_to: to,
      subject: `We received your enquiry: ${requirement} - Swastik Grand Industries`,
      html: customerHtml,
      text: customerText,
    }),
  });

  let responses: Response[];
  try {
    responses = await Promise.all([adminEmailPromise, customerEmailPromise]);
  } catch (error) {
    console.error("Resend request failed:", error);
    return NextResponse.json({ error: "The enquiry could not be sent. Please try again or contact us directly." }, { status: 502 });
  }

  if (responses.some((response) => !response.ok)) {
    console.error("Resend API error:", responses.map((response) => response.status).join(", "));
    return NextResponse.json({ error: "The enquiry could not be sent. Please try again or contact us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, reference });
}