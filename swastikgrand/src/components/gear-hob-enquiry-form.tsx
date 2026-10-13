"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormStatus = "idle" | "sending" | "sent" | "error";

const maxDrawingSize = 10 * 1024 * 1024;

export function GearHobEnquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const drawing = data.get("drawing");

    if (!email && !phone) {
      setMessage("Add an email address or phone / WhatsApp number so we can reply.");
      setStatus("error");
      return;
    }

    if (drawing instanceof File && drawing.size > maxDrawingSize) {
      setMessage("The drawing must be 10 MB or smaller.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/gear-hob-enquiries", { method: "POST", body: data });
      const result = await response.json() as { error?: string; reference?: string };
      if (!response.ok) {
        setMessage(result.error || "The enquiry could not be sent. Please try again or contact us directly.");
        setStatus("error");
        return;
      }
      if (!result.reference) {
        setMessage("The enquiry could not be confirmed. Please contact us directly.");
        setStatus("error");
        return;
      }
      router.push(`/enquiry-confirmation?reference=${encodeURIComponent(result.reference)}&product=${encodeURIComponent("HSS Gear Hob Cutter")}`);
    } catch {
      setMessage("The enquiry could not be sent. Please try again or contact us directly.");
      setStatus("error");
    }
  }

  return <form className="enquiry-form gear-hob-enquiry-form" onSubmit={handleSubmit}>
    <input className="gear-hob-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <p className="gear-hob-form-intro">Share the gear and cutter specification you have. Fields marked optional can be confirmed from your drawing.</p>
    <div className="form-grid">
      <label>Full name<input name="name" required maxLength={120} autoComplete="name" /></label>
      <label>Company<input name="company" maxLength={160} autoComplete="organization" /></label>
      <label>Email<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
      <label>Phone / WhatsApp<input name="phone" type="tel" maxLength={40} autoComplete="tel" /></label>
      <label>Gear type<select name="gearType" defaultValue=""><option value="">Select or specify below</option><option>External spur gear</option><option>External helical gear</option><option>Spline / sprocket</option><option>Worm wheel or special form</option><option>Other / not sure</option></select></label>
      <label>Module or diametral pitch<input name="moduleOrDp" maxLength={100} placeholder="Include module / DP system" /></label>
      <label>Pressure angle<input name="pressureAngle" maxLength={80} placeholder="As shown on drawing" /></label>
      <label>Pitch reference<input name="pitchReference" maxLength={100} placeholder="Normal, transverse, or not sure" /></label>
      <label>Cutter outside diameter<input name="outsideDiameter" maxLength={100} placeholder="Value and unit" /></label>
      <label>Bore / shank and drive<input name="mounting" maxLength={160} placeholder="Bore, keyway or arbor details" /></label>
      <label>Overall / cutting length<input name="lengths" maxLength={160} placeholder="If specified on drawing" /></label>
      <label>Starts and thread hand<input name="startsHand" maxLength={100} placeholder="If known" /></label>
      <label>Workpiece material and hardness<input name="material" maxLength={160} /></label>
      <label>Preferred HSS grade / coating<input name="gradeCoating" maxLength={160} placeholder="Or choose after review" /></label>
      <label>Accuracy class / inspection<input name="accuracy" maxLength={160} placeholder="Standard and class, if specified" /></label>
      <label>Quantity<input name="quantity" required maxLength={120} placeholder="Quantity or size-wise list" /></label>
      <label>Destination country<input name="country" maxLength={100} autoComplete="country-name" /></label>
    </div>
    <label>Additional requirements<textarea name="details" rows={4} maxLength={4000} placeholder="Drawing revision, application, machine, coolant, required documents or delivery needs" /></label>
    <label className="gear-hob-drawing-label">Drawing or reference image <span>Optional; PDF, JPG or PNG, up to 10 MB.</span><input name="drawing" type="file" accept="application/pdf,image/jpeg,image/png,.pdf,.jpg,.jpeg,.png" /></label>
    <label className="gear-hob-privacy"><input name="privacyAcknowledged" type="checkbox" required /><span>I agree that my details and optional drawing may be used to respond to this product enquiry. Drawings are sent to the configured enquiry inbox and are not published on the website. See the <a href="https://swastikgrand.com/privacy-policy/" target="_blank" rel="noreferrer">privacy policy</a>.</span></label>
    <div className="form-actions"><button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending enquiry..." : "Send gear hob enquiry"} <span aria-hidden="true">↗</span></button></div>
    {status === "sent" && <p className="form-note" role="status">Your gear hob enquiry was sent. We will review the specification and contact you.</p>}
    {status === "error" && <p className="form-error" role="alert">{message} <a href="mailto:info@swastikgrand.com">Email us directly</a>.</p>}
    <p className="privacy-note">We use these details only to respond to your enquiry. No marketing subscription is created.</p>
  </form>;
}