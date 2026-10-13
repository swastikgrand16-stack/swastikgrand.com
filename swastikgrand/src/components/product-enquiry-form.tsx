"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { company } from "@/data/site";
import { trackHssHandTapEvent } from "@/components/hss-hand-tap-contact-link";

type ProductEnquiryFormProps = { initialMode?: string; industry?: string; productName?: string; handTapSubmission?: boolean };

export function ProductEnquiryForm({ initialMode = "Standard", industry = "", productName = "HSS Threading Hand Tap", handTapSubmission = false }: ProductEnquiryFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [mode, setMode] = useState(initialMode);
  const leadTrackedRef = useRef(false);
  const [selectedIndustry, setSelectedIndustry] = useState(() => {
    if (typeof window === "undefined") return industry;
    return new URLSearchParams(window.location.search).get("industry") || industry;
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || (handTapSubmission && status === "sent")) return;
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const country = String(form.get("country") || "").trim();
    if (mode === "Export" && !country) {
      const countryField = formElement.elements.namedItem("country");
      if (countryField instanceof HTMLInputElement) countryField.setCustomValidity("Country is required for export enquiries.");
      formElement.reportValidity();
      return;
    }

    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    if (handTapSubmission && !email && !phone) {
      setError("Enter an email address or phone number so we can contact you.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    const payload = {
      productName,
      enquiryMode: mode,
      industry: selectedIndustry,
      name: String(form.get("name") || "").trim(),
      company: String(form.get("company") || "").trim(),
      email,
      phone,
      thread: String(form.get("thread") || "").trim(),
      quantity: String(form.get("quantity") || "").trim(),
      material: String(form.get("material") || "").trim(),
      country,
      details: String(form.get("details") || "").trim(),
      ...(handTapSubmission ? { website: String(form.get("website") || "").trim() } : {}),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { error?: string; reference?: string } | null;
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

      if (handTapSubmission) {
        if (!leadTrackedRef.current) {
          leadTrackedRef.current = true;
          trackHssHandTapEvent("generate_lead");
        }
        setStatus("sent");
      } else {
        router.push(`/enquiry-confirmation?reference=${encodeURIComponent(result.reference)}&product=${encodeURIComponent(productName)}`);
      }
    } catch {
      setError("The enquiry could not be sent. Please try again or contact us directly.");
      setStatus("error");
    }
  }

  return (
    <form className="enquiry-form product-enquiry-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
      {handTapSubmission && (
        <div className="product-enquiry-honeypot" aria-hidden="true">
          <label>
            Leave this field empty
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      )}
      <label>
        Industry / application
        <input
          name="industry"
          value={selectedIndustry}
          onChange={(event) => setSelectedIndustry(event.target.value)}
          placeholder="Workshop, automotive, tool room..."
        />
      </label>
      <div className="form-grid">
        <label>
          Enquiry mode
          <select
            name="enquiryMode"
            value={mode}
            onChange={(event) => {
              setMode(event.target.value);
              const countryField = event.currentTarget.form?.elements.namedItem("country");
              if (countryField instanceof HTMLInputElement) countryField.setCustomValidity("");
            }}
          >
            <option>Standard</option>
            <option>Bulk</option>
            <option>Export</option>
            <option>Custom</option>
          </select>
        </label>
        <label>Full name<input name="name" required placeholder="Your name" /></label>
        <label>Company<input name="company" required={mode !== "Standard"} placeholder="Company name" /></label>
        <label>{handTapSubmission ? "Email (optional)" : "Email"}<input name="email" required={!handTapSubmission} type="email" placeholder="you@company.com" /></label>
        <label>{handTapSubmission ? "Phone / WhatsApp (optional)" : "Phone / WhatsApp"}<input name="phone" required={!handTapSubmission} type="tel" placeholder="+91 ..." /></label>
        <label>{handTapSubmission ? "Thread size, pitch / TPI, standard and RH/LH" : "Thread size and pitch / TPI"}<input name="thread" required placeholder="M10 x 1.5 or 1/4-20 UNC" /></label>
        <label>Quantity<input name="quantity" required placeholder="Quantity or size-wise list" /></label>
        <label>Workpiece material<input name="material" placeholder="Steel, aluminium, cast iron..." /></label>
        <label>Country / delivery location<input name="country" placeholder="India or destination country" /></label>
      </div>
      {handTapSubmission && <p className="privacy-note">Provide at least one contact method: email or phone / WhatsApp.</p>}
      <label>Additional requirements<textarea name="details" rows={4} placeholder={handTapSubmission ? "Hole type / depth, tolerance, drawing or revision, coating and required date" : "Hole type, thread depth, grade, coating, drawing revision or required date"} /></label>
      <div className="form-actions">
        <button className="button button-dark" type="submit" disabled={status === "sending" || (handTapSubmission && status === "sent")}>
          {status === "sending" ? "Sending enquiry..." : status === "sent" ? "Enquiry received" : "Send enquiry"} <span aria-hidden="true">↗</span>
        </button>
        {handTapSubmission ? (
          <a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer" onClick={() => trackHssHandTapEvent("click_whatsapp", "enquiry")}>
            Open WhatsApp <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer">
          Open WhatsApp <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      {status === "sent" && (
        <p className="form-note" role="status">
          {handTapSubmission
            ? "Thank you. Your enquiry has been received. Swastik Grand Industries will contact you using the details provided."
            : `Your enquiry for ${productName} was sent successfully. We will review the details and contact you shortly.`}
        </p>
      )}
      {status === "error" && (
        <p className="form-error" role="alert">
          {error} <a href={`mailto:${company.email}`}>Email us directly</a>.
        </p>
      )}
      <p className="privacy-note">We use these details only to respond to your product enquiry. No marketing subscription is created.</p>
    </form>
  );
}