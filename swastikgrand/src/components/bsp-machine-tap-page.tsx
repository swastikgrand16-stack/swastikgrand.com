import Image from "next/image";
import Link from "next/link";
import { ProductEnquiryForm } from "@/components/product-enquiry-form";
import { SiteShell } from "@/components/site-shell";
import { company } from "@/data/site";
import { handTapIndustries, handTapThreadFamilies } from "@/data/hand-tap";

const specifications = [
  ["Product", "HSS Machine Tap"],
  ["Material grades", "M2 (HSS), M35 (HSS-E), M42 (HSS-ECO)"],
  ["Hardness", "62-64 HRC"],
  ["Size range", "Confirmed for the selected thread and configuration"],
  ["Finish", "Ground thread"],
  ["Thread standards", "Metric, unified, British, pipe and drawing-led requirements"],
  ["Thread form", "Confirmed against the selected standard"],
  ["Tolerance", "Required gauge or application specification"],
  ["Flutes", "Straight flutes; 4-flute or 6-flute options"],
  ["Lead / chamfer", "2-thread, 4-thread or 6-thread lead"],
  ["Coating", "Discuss the required coating for the material and process"],
  ["Country of origin", "India"],
];

const features = [
  ["Machine threading", "For suitable internal threading operations where the machine, workpiece, hole and cutting conditions are reviewed together."],
  ["Machine operation review", "Confirm machine, alignment, workholding, hole preparation, lubrication and tapping cycle before selection."],
  ["HSS grade options", "Discuss M2, M35 or M42 according to the workpiece material and production requirement."],
  ["Ground-thread finish", "Supports controlled thread formation and dimensional review for the selected configuration."],
  ["Lead and flute choices", "Review 2-, 4- or 6-thread lead and straight 4- or 6-flute options against the selected application."],
  ["Drawing-led supply", "Share the pipe standard, size, tolerance, quantity and inspection requirement for quotation."],
];

const faqs = [
  ["What is an HSS machine tap used for?", "It is used for suitable machine threading operations that create internal threads in prepared holes."],
  ["What sizes and thread standards are available?", "Confirm the exact size, pitch, thread designation, tolerance and availability for the selected configuration in the quotation."],
  ["Can you review special thread requirements?", "Yes. Share the exact thread standard, component drawing, machine details and inspection requirements for technical review."],
  ["Which material grades are available?", "The listed options are M2, M35 and M42. Grade selection depends on the workpiece material and process."],
  ["Can you support bulk or custom requirements?", "Yes. Share size-wise quantities, drawings, tolerance, coating, inspection and delivery requirements for review."],
];

export function BspMachineTapPage() {
  return <SiteShell><main id="top" className="product-page">
    <nav className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Products</Link><span aria-hidden="true">/</span><Link href="/products/hss-threading-taps">HSS Threading Taps</Link><span aria-hidden="true">/</span><strong aria-current="page">HSS Machine Tap</strong></nav>
    <section className="product-hero section"><div className="shell product-hero-grid"><div className="product-gallery"><div className="product-gallery-main"><Image src="/images/products/hss-machine-tap.jpg" alt="SWAGIN HSS machine tap product family" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="product-gallery-image" /></div><p className="product-gallery-caption">HSS Machine Tap</p><p className="product-gallery-note">Product-family image shown for this machine-tap route. Confirm the selected configuration in your quotation.</p></div><div className="product-summary"><p className="eyebrow">HSS machine tap manufacturer · Ludhiana, India</p><h1>HSS Machine<br /><em>Taps</em></h1><p className="product-subtitle">Threading tools for suitable machine operations.</p><p className="product-description">SWAGIN HSS machine taps support controlled internal threading where the machine, hole preparation, material, thread standard and cutting conditions are reviewed together. Share the size, pitch, quantity and drawing reference for a suitable configuration review.</p><div className="product-facts"><span><b>M2 · M35 · M42</b><small>Material grades</small></span><span><b>6–100 mm, 1/4&quot;-4&quot;</b><small>Listed size range</small></span><span><b>62–64 HRC</b><small>Listed hardness</small></span></div><div className="product-actions"><Link className="button button-yellow" href="#enquiry">Request a product quote <span aria-hidden="true">↗</span></Link><a className="product-phone" href={company.phoneHref}>Call manufacturer<br /><strong>{company.phone}</strong></a></div><div className="product-quick-links"><a href="#specifications">Specifications</a><a href="#applications">Applications</a><a href="#faqs">FAQs</a></div></div></div></section>
    <section className="product-overview section"><div className="shell product-two-column"><div><p className="eyebrow">Product overview</p><h2>Machine threading matched to the job.</h2></div><div><p>High-speed steel machine taps are selected against the machine type, spindle and alignment, workpiece material, hole form, thread depth, chip movement, lubrication and required production cycle.</p><p className="callout">A machine tap is not selected by size alone. Confirm the thread standard, tolerance, geometry, coating, dimensions and process conditions in the quotation.</p></div></div></section>
    <section className="product-features section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Application-led review</p><h2>Details that help<br /><em>you choose.</em></h2></div><p>Technical and commercial terms are confirmed for the selected configuration. No universal leak-free, delivery or performance promise is made here.</p></div><div className="feature-grid">{features.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section id="specifications" className="section specifications"><div className="shell product-two-column"><div><p className="eyebrow">Technical information</p><h2>Confirm the right machine-tap configuration.</h2><p className="section-note">These are listed product-family details. Confirm the exact designation, dimensions, grade, coating, gauge, availability and commercial terms in the quotation.</p></div><div className="spec-table">{specifications.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></div></section>
    <section className="thread-section section"><div className="shell thread-grid"><div><p className="eyebrow">Thread families</p><h2>Find the thread<br /><em>you need.</em></h2><p>These are enquiry options, not a live inventory claim. Send the exact component drawing where a thread designation is ambiguous.</p></div><div className="thread-panels">{handTapThreadFamilies.map(([group, options]) => <div key={group}><strong>{group}</strong><span>{options}</span></div>)}</div></div></section>
    <section id="applications" className="applications-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Industrial uses</p><h2>Tools for every<br /><em>machine route.</em></h2></div><p>Illustrative industry applications, not customer or project claims. Discuss the drawing, material, machine, hole and production quantity with the manufacturer.</p></div><div className="industry-grid">{handTapIndustries.map(([title, text, image], index) => <article key={title}><div className="industry-image"><Image src={image} alt={`${title} HSS machine tap application example`} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="industry-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><a href={`/products/hss-threading-taps/hss-machine-taps?industry=${encodeURIComponent(title)}#enquiry`}>Discuss this application <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section id="enquiry" className="product-enquiry section"><div className="shell product-two-column"><div><p className="eyebrow">HSS machine tap enquiry</p><h2>Tell us what you need.<br /><em>We will review the route.</em></h2><p>Share the thread standard, size, material, machine, quantity or drawing reference. The enquiry is sent to the configured company inbox.</p><div className="contact-list"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a></div></div><ProductEnquiryForm productName="HSS Machine Tap" /></div></section>
    <section id="faqs" className="faq-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Clear answers<br /><em>before you order.</em></h2></div></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="related-products section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Continue exploring</p><h2>Related tools<br /><em>for the job.</em></h2></div><p>Review other threading routes when the application needs a different machine, hand, nut or special thread tap.</p></div><div className="related-grid"><Link href="/products/hss-threading-taps/hss-hand-taps"><Image src="/images/products/hss-hand-tap.jpg" alt="HSS Threading Hand Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Threading Hand Tap</strong></Link><Link href="/products/hss-threading-taps/hss-hand-tap-sets"><Image src="/images/products/hss-hand-tap-set.jpg" alt="HSS Hand Tap Set" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Hand Tap Set</strong></Link><Link href="/products"><Image src="/images/products/hss-nut-tap.jpg" alt="HSS Nut Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>View all products</strong></Link></div></div></section>
    <div className="mobile-contact-bar"><a href={company.phoneHref}>Call</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#enquiry">Request quote</a></div>
  </main></SiteShell>;
}
