import { NextResponse } from "next/server";

type EnquiryPayload = {
  enquiryType?: string;
  enquiryMode?: string;
  name?: string;
  email?: string;
  country?: string;
  deliveryLocation?: string;
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
  productFamily?: string;
  website?: string;
};

const maxRequestBytes = 16 * 1024;
const enquiryRateWindowMs = 10 * 60 * 1000;
const enquiryMaxRequestsPerWindow = 5;
// This limit is per runtime instance; multi-instance deployments need shared rate-limit storage.
const enquiryRequestsByIp = new Map<string, { count: number; resetAt: number }>();

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isRateLimited(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const record = enquiryRequestsByIp.get(ip);
  if (!record || record.resetAt <= now) {
    enquiryRequestsByIp.set(ip, { count: 1, resetAt: now + enquiryRateWindowMs });
    return false;
  }
  if (record.count >= enquiryMaxRequestsPerWindow) return true;
  record.count += 1;
  if (enquiryRequestsByIp.size > 1000) {
    for (const [key, value] of enquiryRequestsByIp) if (value.resetAt <= now) enquiryRequestsByIp.delete(key);
  }
  return false;
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
  const from = process.env.RESEND_FROM_EMAIL || "Swastik Grand Industries <info@swastikgrand.com>";

  if (!apiKey) return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > maxRequestBytes) {
    return NextResponse.json({ error: "The enquiry is too large. Please shorten the message and try again." }, { status: 413 });
  }

  let payload: EnquiryPayload;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > maxRequestBytes) {
      return NextResponse.json({ error: "The enquiry is too large. Please shorten the message and try again." }, { status: 413 });
    }
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
    }
    payload = parsed as EnquiryPayload;
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
  const productFamily = clean(payload.productFamily);
  const country = clean(payload.country);
  const deliveryLocation = clean(payload.deliveryLocation);
  const company = clean(payload.company);
  const details = clean(payload.details);
  const rawRequirement = clean(payload.requirement);

  const requirement = rawRequirement || [productName, thread].filter(Boolean).join(" - ") || "Tooling enquiry";
  const isHandTapEnquiry = productName === "HSS Threading Hand Tap";

  if (clean(payload.website)) {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }
  if (isRateLimited(request)) {
    return NextResponse.json({ error: "Too many enquiries. Please try again later." }, { status: 429 });
  }
  const fieldLengths: [string, number][] = [
    [enquiryType, 32],
    [name, 160], [email, 254], [phone, 32], [productName, 160], [productFamily, 100],
    [thread, 160], [quantity, 100], [material, 160], [industry, 160], [country, 100], [deliveryLocation, 100],
    [company, 160], [details, 8000], [rawRequirement, 2000],
  ];
  if (fieldLengths.some(([value, maxLength]) => value.length > maxLength)) {
    return NextResponse.json({ error: "One or more enquiry fields are too long. Please shorten them and try again." }, { status: 400 });
  }
  if (!name || (!email && !phone)) {
    return NextResponse.json({ error: "Enter your name and at least one valid contact method." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (phone && (phone.replace(/\D/g, "").length < 7 || phone.replace(/\D/g, "").length > 15)) {
    return NextResponse.json({ error: "Enter a valid contact number, including its country code where relevant." }, { status: 400 });
  }
  if (isHandTapEnquiry && (!thread || !quantity)) {
    return NextResponse.json({ error: "Thread size and quantity are required for this hand-tap enquiry." }, { status: 400 });
  }

  const reference = createReference();
  const fields: [string, string][] = [
    ["Reference", reference],
    productName ? ["Product", productName] : null,
    productFamily ? ["Product family", productFamily] : null,
    ["Enquiry type", enquiryType],
    ["Name", name],
    email ? ["Email", email] : null,
    phone ? ["Phone", phone] : null,
    company ? ["Company", company] : null,
    country ? ["Country / location", country] : null,
    deliveryLocation ? ["Delivery country / location", deliveryLocation] : null,
    industry ? ["Industry / application", industry] : null,
    thread ? ["Thread size & pitch", thread] : null,
    quantity ? ["Quantity", quantity] : null,
    material ? ["Workpiece material", material] : null,
    rawRequirement ? ["Requirement", rawRequirement] : null,
    details ? ["Additional requirements", details] : null,
  ].filter((item): item is [string, string] => Boolean(item));

  const emailRows = fields
    .map(([label, value]) => `<tr><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#68737c;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;width:34%">${escapeHtml(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #e6e9eb;color:#202d3b;font-size:14px;line-height:1.5;vertical-align:top">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("");

  const replyLink = email
    ? `<table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:24px"><tr><td style="background:#fac62b;padding:12px 17px"><a href="mailto:${escapeHtml(email)}" style="color:#142333;font-size:13px;font-weight:700;text-decoration:none">Reply to buyer</a></td></tr></table>`
    : "";
  const adminHtml = `<!doctype html><html><body style="margin:0;background:#f3f5f7;color:#202d3b;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f5f7;padding:28px 12px"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e1e6e9"><tr><td style="background:#142333;padding:25px 28px"><div style="color:#fac62b;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase">SWAGIN / SWASTIK GRAND INDUSTRIES</div><div style="color:#ffffff;font-size:24px;font-weight:700;margin-top:12px">New website enquiry</div></td></tr><tr><td style="height:6px;background:#fac62b;font-size:0;line-height:0">&nbsp;</td></tr><tr><td style="padding:28px"><p style="margin:0 0 20px;color:#68737c;font-size:14px;line-height:1.6">A new ${escapeHtml(enquiryType.toLowerCase())} enquiry was submitted through the website.</p><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e6e9;border-collapse:collapse">${emailRows}</table>${replyLink}</td></tr><tr><td style="background:#142333;padding:18px 28px;color:#aebbc3;font-size:11px;line-height:1.6">Swastik Grand Industries · Ludhiana, Punjab, India<br><span style="color:#fac62b">This message was sent from the website enquiry form.</span></td></tr></table></td></tr></table></body></html>`;

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
      reply_to: email || undefined,
      subject: adminSubject,
      html: adminHtml,
      text: adminText,
    }),
  });

  const sendCustomerEmail = () => fetch("https://api.resend.com/emails", {
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

  let adminResponse: Response;
  try {
    adminResponse = await adminEmailPromise;
  } catch {
    console.error("Resend request failed while sending enquiry.");
    return NextResponse.json({ error: "The enquiry could not be sent. Please try again or contact us directly." }, { status: 502 });
  }
  if (!adminResponse.ok) {
    console.error("Resend API error while sending enquiry:", adminResponse.status);
    return NextResponse.json({ error: "The enquiry could not be sent. Please try again or contact us directly." }, { status: 502 });
  }

  if (email) {
    try {
      const customerResponse = await sendCustomerEmail();
      if (!customerResponse.ok) console.error("Resend customer confirmation error:", customerResponse.status);
    } catch {
      console.error("Resend customer confirmation request failed.");
    }
  }

  return NextResponse.json({ ok: true, reference });
}