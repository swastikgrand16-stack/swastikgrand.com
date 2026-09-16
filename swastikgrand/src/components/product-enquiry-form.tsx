"use client";

import { FormEvent, useState } from "react";
import { company } from "@/data/site";

type ProductEnquiryFormProps = { initialMode?: string; industry?: string };

export function ProductEnquiryForm({ initialMode = "Standard", industry = "" }: ProductEnquiryFormProps) {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`HSS Hand Tap enquiry: ${form.get("enquiryMode")}`);
    const body = encodeURIComponent([
      `Product: HSS Threading Hand Tap`, `Enquiry mode: ${form.get("enquiryMode")}`, `Industry/application: ${form.get("industry")}`,
      `Name: ${form.get("name")}`, `Company: ${form.get("company")}`, `Email: ${form.get("email")}`, `Phone: ${form.get("phone")}`,
      `Thread size and pitch/TPI: ${form.get("thread")}`, `Quantity: ${form.get("quantity")}`, `Material: ${form.get("material")}`,
      `Country: ${form.get("country")}`, `Requirements: ${form.get("details")}`,
    ].join("\n"));
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setPrepared(true);
  }

  return <form className="enquiry-form product-enquiry-form" onSubmit={handleSubmit}>
    <input type="hidden" name="industry" value={industry} readOnly />
    <div className="form-grid">
      <label>Enquiry mode<select name="enquiryMode" defaultValue={initialMode}><option>Standard</option><option>Bulk</option><option>Export</option><option>Custom</option></select></label>
      <label>Full name<input name="name" required placeholder="Your name" /></label>
      <label>Company<input name="company" placeholder="Company name" /></label>
      <label>Email<input name="email" required type="email" placeholder="you@company.com" /></label>
      <label>Phone / WhatsApp<input name="phone" required type="tel" placeholder="+91 ..." /></label>
      <label>Thread size and pitch / TPI<input name="thread" required placeholder="M10 x 1.5 or 1/4-20 UNC" /></label>
      <label>Quantity<input name="quantity" required placeholder="Quantity or size-wise list" /></label>
      <label>Workpiece material<input name="material" placeholder="Steel, aluminium, cast iron..." /></label>
      <label>Country / delivery location<input name="country" placeholder="India or destination country" /></label>
    </div>
    <label>Additional requirements<textarea name="details" rows={4} placeholder="Hole type, thread depth, grade, coating, drawing revision or required date" /></label>
    <div className="form-actions"><button className="button button-dark" type="submit">Prepare email enquiry <span aria-hidden="true">↗</span></button><a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp <span aria-hidden="true">↗</span></a></div>
    {prepared && <p className="form-note" role="status">Your email app should open with the enquiry drafted. Review the details and send it from there.</p>}
    <p className="privacy-note">We use these details only to respond to your product enquiry. No marketing subscription is created.</p>
  </form>;
}