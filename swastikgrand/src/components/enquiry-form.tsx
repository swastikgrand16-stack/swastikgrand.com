"use client";

import { FormEvent, useState } from "react";
import { company } from "@/data/site";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry: ${form.get("enquiryType")}`);
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\nCountry: ${form.get("country")}\nCompany: ${form.get("company")}\nPhone: ${form.get("phone")}\nRequirement: ${form.get("requirement")}\nDetails: ${form.get("details")}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Enquiry type<select name="enquiryType" defaultValue="Standard"><option>Standard</option><option>Bulk</option><option>Export</option><option>Custom</option><option>Consultation</option></select></label>
        <label>Full name<input name="name" required placeholder="Full name" /></label>
        <label>Email<input name="email" required type="email" placeholder="you@company.com" /></label>
        <label>Country / code<input name="country" placeholder="India / +91" /></label>
        <label>Contact number<input name="phone" required type="tel" placeholder="+91 ..." /></label>
        <label>Company<input name="company" placeholder="Company name" /></label>
      </div>
      <label>What do you need?<input name="requirement" required placeholder="Product, size, thread or application" /></label>
      <label>Comment or message<textarea name="details" rows={4} placeholder="Material, quantity, drawing reference or required date" /></label>
      <div className="form-actions"><button className="button button-dark" type="submit">Prepare email enquiry <span>↗</span></button><a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp <span>↗</span></a></div>
      {sent && <p className="form-note" role="status">Your email app should open with the enquiry drafted. Please review and send it.</p>}
      <p className="privacy-note">We use these details only to respond to your enquiry. No marketing subscription is created.</p>
    </form>
  );
}