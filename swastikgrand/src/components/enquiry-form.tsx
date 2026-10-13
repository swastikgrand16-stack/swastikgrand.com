"use client";

import { getCountryCallingCode, type CountryCode } from "libphonenumber-js";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { company } from "@/data/site";

export function EnquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const [geoError, setGeoError] = useState("");

  useEffect(() => {
    let isCurrent = true;

    void fetch("/api/geo")
      .then(async (response) => {
        if (!response.ok) throw new Error("Country detection is unavailable.");
        return response.json() as Promise<{ countryCode?: string }>;
      })
      .then(({ countryCode }) => {
        if (!isCurrent || !countryCode) {
          if (isCurrent) setGeoError("Enter your country and dial code.");
          return;
        }

        try {
          const displayName = new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode);
          const dialCode = getCountryCallingCode(countryCode as CountryCode);
          if (!displayName) {
            setGeoError("Enter your country and dial code.");
            return;
          }
          setCountry(`${displayName} / +${dialCode}`);
        } catch {
          setGeoError("Enter your country and dial code.");
        }
      })
      .catch(() => {
        if (isCurrent) setGeoError("We could not detect your country. Enter your country and dial code.");
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form.entries())) });
    const result = await response.json().catch(() => null) as { error?: string; reference?: string } | null;
    if (!response.ok) {
      setError(result?.error || "The enquiry could not be sent. Please try again.");
      setStatus("error");
      return;
    }
    if (!result?.reference) {
      setError("The enquiry could not be confirmed. Please contact us directly.");
      setStatus("error");
      return;
    }
    router.push(`/enquiry-confirmation?reference=${encodeURIComponent(result.reference)}&product=${encodeURIComponent(String(form.get("requirement") || "Website enquiry"))}`);
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Enquiry type<select name="enquiryType" defaultValue="Standard"><option>Standard</option><option>Bulk</option><option>Export</option><option>Custom</option><option>Consultation</option></select></label>
        <label>Full name<input name="name" required placeholder="Full name" /></label>
        <label>Email<input name="email" required type="email" placeholder="you@company.com" /></label>
        <label>Country / code<input name="country" value={country} onChange={(event) => { setCountry(event.target.value); setGeoError(""); }} placeholder="India / +91" /></label>
        <label>Contact number<input name="phone" required type="tel" placeholder="+91 ..." /></label>
        <label>Company<input name="company" placeholder="Company name" /></label>
      </div>
      <label>What do you need?<input name="requirement" required placeholder="Product, size, thread or application" /></label>
      <label>Comment or message<textarea name="details" rows={4} placeholder="Material, quantity, drawing reference or required date" /></label>
      <div className="form-actions"><button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending enquiry..." : "Send enquiry"} <span>↗</span></button><a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp <span>↗</span></a></div>
      {status === "sent" && <p className="form-note" role="status">Your enquiry was sent. We will review the details and contact you.</p>}
      {status === "error" && <p className="form-error" role="alert">{error} <a href={`mailto:${company.email}`}>Email us directly</a>.</p>}
      {geoError && <p className="form-note" role="status">{geoError}</p>}
      <p className="privacy-note">We use these details only to respond to your enquiry. No marketing subscription is created.</p>
    </form>
  );
}