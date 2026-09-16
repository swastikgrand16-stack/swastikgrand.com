import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Get a Quote | Swastik Grand Industries", description: "Request pricing for HSS taps, threading tools and custom tooling from Swastik Grand Industries." };

export default function QuotePage() {
  return <SiteShell><main id="top" className="inner-page quote-page"><section className="inner-hero"><div className="shell inner-hero-grid"><div><p className="eyebrow">Get a quote</p><h1>Tell us what you need.<br /><em>We&apos;ll find the tool.</em></h1></div><p>Share the product, size, material, quantity and delivery requirement. We&apos;ll prepare a clear response for your next order.</p></div></section><section className="section quote-main"><div className="shell quote-layout"><div><p className="eyebrow">Pricing enquiry</p><h2>Good tooling<br /><em>starts with detail.</em></h2><p className="quote-lede">For standard, bulk, export or custom requirements, include as much detail as you have. A drawing, sample reference or thread specification helps us respond accurately.</p><div className="quote-notes"><span>01 <strong>Product or tool type</strong></span><span>02 <strong>Size, pitch and material</strong></span><span>03 <strong>Quantity and required date</strong></span></div></div><EnquiryForm /></div></section></main></SiteShell>;
}