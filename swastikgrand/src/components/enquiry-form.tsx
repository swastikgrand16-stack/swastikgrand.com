"use client";

import { getCountryCallingCode, type CountryCode } from "libphonenumber-js";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { company } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const enquiryTypes = ["Standard", "Bulk", "Export", "Custom", "Consultation"];
const productFamilies = [
  "Help me select",
  "Threading taps",
  "Reamers",
  "Tool bits and milling cutters",
  "Dies and thread rolling tools",
];

type FormStatus = "idle" | "validating" | "sending" | "accepted" | "failed";

export function EnquiryForm() {
  const router = useRouter();
  const isSubmitting = useRef(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [contactError, setContactError] = useState("");
  const [country, setCountry] = useState("");
  const [geoError, setGeoError] = useState("");
  const [enquiryType, setEnquiryType] = useState("Standard");
  const [productFamily, setProductFamily] = useState("Help me select");

  useEffect(() => {
    function handlePrefill(event: Event) {
      const detail = (event as CustomEvent<{ enquiryType?: string; productFamily?: string }>).detail;
      if (detail?.enquiryType && enquiryTypes.includes(detail.enquiryType)) setEnquiryType(detail.enquiryType);
      if (detail?.productFamily && productFamilies.includes(detail.productFamily)) setProductFamily(detail.productFamily);
    }

    window.addEventListener("swastik:enquiry-prefill", handlePrefill);
    return () => window.removeEventListener("swastik:enquiry-prefill", handlePrefill);
  }, []);

  useEffect(() => {
    let isCurrent = true;

    void fetch("/api/geo")
      .then(async (response) => {
        if (!response.ok) throw new Error("Country detection is unavailable.");
        return response.json() as Promise<{ countryCode?: string }>;
      })
      .then(({ countryCode }) => {
        if (!isCurrent || !countryCode) {
          if (isCurrent) setGeoError("Enter your country and dial code if relevant.");
          return;
        }

        try {
          const displayName = new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode);
          const dialCode = getCountryCallingCode(countryCode as CountryCode);
          if (!displayName) {
            setGeoError("Enter your country and dial code if relevant.");
            return;
          }
          setCountry(`${displayName} / +${dialCode}`);
        } catch {
          setGeoError("Enter your country and dial code if relevant.");
        }
      })
      .catch(() => {
        if (isCurrent) setGeoError("We could not detect your country. Enter it and the dial code if relevant.");
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting.current) return;
    setStatus("validating");
    setError("");
    setContactError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    if (!email && !phone) {
      setContactError("Enter an email address or contact number so our team can reply.");
      setStatus("failed");
      return;
    }
    if (phone && (phone.replace(/\D/g, "").length < 7 || phone.replace(/\D/g, "").length > 15)) {
      setContactError("Enter a valid contact number, including its country code where relevant.");
      setStatus("failed");
      return;
    }

    setStatus("sending");
    isSubmitting.current = true;
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      let result: { error?: string; reference?: string } | null = null;
      try {
        result = await response.json() as { error?: string; reference?: string };
      } catch {
        result = null;
      }

      if (!response.ok) {
        setError(result?.error || "Your enquiry could not be sent. Please try again or contact us by phone or WhatsApp.");
        setStatus("failed");
        isSubmitting.current = false;
        return;
      }
      if (!result?.reference) {
        setError("Your enquiry could not be confirmed. Please contact us by phone or WhatsApp.");
        setStatus("failed");
        isSubmitting.current = false;
        return;
      }

      trackEvent("generate_lead", {
        page_path: window.location.pathname,
        product_family: String(formData.get("productFamily") || "Help me select"),
        button_location: "enquiry-form",
      });
      setStatus("accepted");
      router.push(`/enquiry-confirmation?reference=${encodeURIComponent(result.reference)}`);
    } catch {
      setError("Your enquiry could not be sent. Please try again or contact us by phone or WhatsApp.");
      setStatus("failed");
      isSubmitting.current = false;
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <div className="form-honeypot" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-grid">
        <label>Enquiry type
          <select name="enquiryType" value={enquiryType} onChange={(event) => setEnquiryType(event.target.value)}>
            {enquiryTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label>Product family
          <select name="productFamily" value={productFamily} onChange={(event) => setProductFamily(event.target.value)} required>
            {productFamilies.map((family) => <option key={family}>{family}</option>)}
          </select>
        </label>
        <label>Full name<input name="name" required maxLength={160} autoComplete="name" placeholder="Full name" /></label>
        <label>Email<input name="email" type="email" maxLength={254} autoComplete="email" placeholder="you@company.com (optional)" aria-invalid={contactError ? true : undefined} aria-describedby={contactError ? "contact-method-error" : undefined} onChange={() => setContactError("")} /></label>
        <label>Country / dial code<input name="country" value={country} onChange={(event) => { setCountry(event.target.value); setGeoError(""); }} maxLength={100} autoComplete="country-name" placeholder="India / +91 (optional)" /></label>
        <label>Contact number<input name="phone" type="tel" maxLength={32} autoComplete="tel" placeholder="+91 ... (optional)" aria-invalid={contactError ? true : undefined} aria-describedby={contactError ? "contact-method-error" : undefined} onChange={() => setContactError("")} /></label>
        <label>Company<input name="company" maxLength={160} autoComplete="organization" placeholder="Company name (optional)" /></label>
        <label>Quantity (if known)<input name="quantity" maxLength={100} placeholder="Quantity or size-wise list (optional)" /></label>
        <label>Delivery country / location<input name="deliveryLocation" maxLength={100} autoComplete="country-name" placeholder="Destination country or location (optional)" /></label>
      </div>
      {contactError && <p className="form-error" id="contact-method-error" role="alert">{contactError}</p>}
      <label>What do you need?
        <textarea name="requirement" required maxLength={2000} rows={3} placeholder="Product, size or thread, material and quantity if known" />
      </label>
      <label>Additional details
        <textarea name="details" maxLength={8000} rows={4} placeholder="Application, diameter, pitch/TPI, standard, hand, dimensions, grade, coating, tolerance or drawing reference" />
      </label>
      {error && <p className="form-error" role="alert">{error} <a href={`mailto:${company.email}`}>Email us directly</a>.</p>}
      {status === "accepted" && <p className="form-note" role="status">Thank you. Your enquiry has been received. Swastik Grand Industries will contact you using the details provided.</p>}
      {geoError && <p className="form-note" role="status">{geoError}</p>}
      <div className="form-actions">
        <button className="button button-dark" type="submit" disabled={status === "sending" || status === "validating"}>
          {status === "sending" ? "Sending enquiry..." : "Send enquiry"} <span aria-hidden="true">↗</span>
        </button>
        <a className="text-link" href={company.whatsapp} target="_blank" rel="noreferrer" data-track-event="click_whatsapp" data-button-location="enquiry-form">Open WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
      <p className="privacy-note">We use these details to respond to your enquiry. No marketing subscription is created. Please email drawings to {company.email}; this form does not accept file uploads.</p>
    </form>
  );
}
