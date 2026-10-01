import { NextResponse } from "next/server";

type EnquiryPayload = {
  enquiryType?: string;
  name?: string;
  email?: string;
  country?: string;
  company?: string;
  phone?: string;
  requirement?: string;
  details?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] || character);
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

  const enquiryType = clean(payload.enquiryType) || "Standard";
  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const requirement = clean(payload.requirement);

  if (!name || !email || !phone || !requirement) {
    return NextResponse.json({ error: "Name, email, phone and requirement are required." }, { status: 400 });
  }

  const country = clean(payload.country) || "Not provided";
  const company = clean(payload.company) || "Not provided";
  const details = clean(payload.details) || "Not provided";
  const emailRows = [
    ["Enquiry type", enquiryType],
    ["Name", name],
    ["Email", email],
    ["Country / code", country],
    ["Company", company],
    ["Phone", phone],
    ["Requirement", requirement],
    ["Details", details],
  ].map(([label, value]) => `<tr><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#68737c;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;width:34%">${escapeHtml(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#202d3b;font-size:14px;line-height:1.5;vertical-align:top">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("");
  const html = `<!doctype html><html><body style="margin:0;background:#f3f5f7;color:#202d3b;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f5f7;padding:28px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e1e6e9"><tr><td style="background:#142333;padding:25px 28px"><div style="color:#fac62b;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase">SWAGIN / SWASTIK GRAND INDUSTRIES</div><div style="color:#ffffff;font-size:24px;font-weight:700;margin-top:12px">New website enquiry</div></td></tr><tr><td style="height:6px;background:#fac62b;font-size:0;line-height:0">&nbsp;</td></tr><tr><td style="padding:28px"><p style="margin:0 0 20px;color:#68737c;font-size:14px;line-height:1.6">A new ${escapeHtml(enquiryType.toLowerCase())} enquiry was submitted through the website.</p><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e6e9;border-collapse:collapse">${emailRows}</table><table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:24px"><tr><td style="background:#fac62b;padding:12px 17px"><a href="mailto:${escapeHtml(email)}" style="color:#142333;font-size:13px;font-weight:700;text-decoration:none">Reply to buyer</a></td></tr></table></td></tr><tr><td style="background:#142333;padding:18px 28px;color:#aebbc3;font-size:11px;line-height:1.6">Swastik Grand Industries · Ludhiana, Punjab, India<br><span style="color:#fac62b">This message was sent from the website enquiry form.</span></td></tr></table></td></tr></table></body></html>`;

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry: ${enquiryType} - ${requirement}`,
      html,
      text: [
        `Enquiry type: ${enquiryType}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Country / code: ${country}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Requirement: ${requirement}`,
        `Details: ${details}`,
      ].join("\n"),
    }),
  });

  if (!emailResponse.ok) return NextResponse.json({ error: "The enquiry could not be sent. Please try again or contact us directly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}