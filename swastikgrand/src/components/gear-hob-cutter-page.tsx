import Image from "next/image";
import Link from "next/link";
import { GearHobEnquiryForm } from "@/components/gear-hob-enquiry-form";
import { SiteShell } from "@/components/site-shell";
import { company } from "@/data/site";

const specifications = [
  ["Material grades listed", "M2 (HSS), M35 (HSS-E), M42 (HSS-ECO)"],
  ["Hardness listed", "62–64 HRC; confirm grade-specific details"],
  ["Advertised size range", "25 mm to 160 mm; confirm dimension basis"],
  ["Advertised length", "Up to 180 mm; confirm whether this is overall or cutting length"],
  ["Standards listed", "DIN 3968; DIN 8002B; edition and scope to be confirmed"],
  ["Flute type listed", "Straight flutes; confirm gash geometry and hand"],
  ["Coatings listed", "Golden TiN, Futura, Alcoran; confirm exact trade name and availability"],
  ["Country of origin", "India"],
];

const applications = [
  ["External spur and helical gears", "Send the gear drawing and identify the tooth system and pitch reference. Suitability depends on hob design, machine and workpiece."],
  ["Transmission and machinery components", "Share the component, material and production requirements for a drawing-led review."],
  ["Agricultural and industrial equipment", "A relevant application context; no specific equipment approval or customer supply is implied."],
  ["Special tooth forms", "Spline, sprocket, worm-wheel and other special tooling requires a matching design and feasibility review."],
];

const questions = [
  ["What details are needed for a quotation?", "Send the gear drawing, module or diametral pitch, pressure angle, pitch reference, bore or mounting details, quantity and any required inspection class."],
  ["Is module the same as diametral pitch?", "No. They use different systems. A basic pitch conversion is module in millimetres = 25.4 ÷ diametral pitch; confirm the reference system for helical gear geometry."],
  ["Can one hob cut every gear type?", "No. Tool design depends on tooth geometry, gear type, machine and mounting. Submit the drawing for review rather than selecting by outside diameter alone."],
  ["Are gear hobs and gear milling cutters interchangeable?", "No. They use different cutting methods and machine requirements."],
  ["Which HSS grade or coating should I request?", "The source lists M2, M35 and M42 and names Golden TiN, Futura and Alcoran coatings. Confirm exact availability and suitability for the part and process."],
  ["What are price, minimum order and lead time?", "These depend on the approved specification and quantity and are confirmed in the written quotation."],
  ["Can you review a custom drawing or export enquiry?", "Submit the drawing revision and required quantity. For export, include destination and requested delivery terms for review."],
];

export function HssGearHobCutterPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SWAGIN HSS Gear Hob Cutter",
    brand: { "@type": "Brand", name: "SWAGIN" },
    manufacturer: { "@type": "Organization", name: company.name },
    countryOfOrigin: "India",
    description: "HSS gear hob cutters for drawing-led gear cutting requirements. Confirm cutter geometry, mounting and availability in a quotation.",
    image: "https://swastikgrand.com/images/products/hss-gear-hob-cutter.jpg",
    url: "https://swastikgrand.com/products/milling-gear-cutters/hss-gear-hob-cutters",
  };

  return <SiteShell><main id="top" className="product-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
    <nav className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Products</Link><span aria-hidden="true">/</span><Link href="/products/milling-gear-cutters">HSS Milling &amp; Gear Cutters</Link><span aria-hidden="true">/</span><strong aria-current="page">HSS Gear Hob Cutter</strong></nav>
    <section className="product-hero"><div className="shell product-hero-grid">
      <div className="product-gallery"><div className="product-gallery-main"><Image src="/images/products/hss-gear-hob-cutter.jpg" alt="SWAGIN HSS gear hob cutter showing cutting teeth and mounting bore" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="product-gallery-image" /></div><p className="product-gallery-caption">HSS Gear Hob Cutter</p><p className="product-gallery-note">Product image; confirm cutter geometry and mounting dimensions against the supplied drawing.</p></div>
      <div className="product-summary"><p className="eyebrow">Swagin · Swastik Grand Industries · Ludhiana, India</p><h1>HSS Gear Hob<br /><em>Cutter Manufacturer</em></h1><p className="product-subtitle">Drawing-led gear hobbing tool enquiries.</p><p className="product-description">Share your gear drawing and cutter specification with Swastik Grand Industries. The team can review the tooth profile, mounting dimensions and application requirements before preparing a quotation.</p><p className="product-description">Send module or diametral pitch, pressure angle, bore size and quantity. Include the existing hob drawing or sample details when available.</p><div className="product-actions"><Link className="button button-yellow" href="#enquiry">Request a quotation <span aria-hidden="true">↗</span></Link><a className="product-phone" href={company.phoneHref}>Call manufacturer<br /><strong>{company.phone}</strong></a><a className="product-phone" href={`${company.whatsapp}?text=${encodeURIComponent("I need an HSS gear hob cutter quotation. Module/DP: __; pressure angle: __; quantity: __.")}`} target="_blank" rel="noreferrer">Send details on WhatsApp</a></div></div>
    </div></section>

    <section className="product-overview section"><div className="shell product-two-column"><div><p className="eyebrow">Gear hobbing</p><h2>Start with the gear drawing.</h2></div><div><p>A gear hob works with a compatible hobbing machine and workpiece motion to generate gear teeth. Cutter selection depends on the tooth geometry, pitch system, machine mounting and manufacturing process.</p><p className="callout">A gear hob and a disc-type gear milling cutter use different cutting methods and are not interchangeable. External gear, spline, sprocket and worm-wheel tooling can require different designs; submit the drawing for a technical review.</p></div></div></section>

    <section id="specifications" className="section specifications"><div className="shell product-two-column"><div><p className="eyebrow">Source-listed information</p><h2>Published specifications.<br /><em>Confirm for your cutter.</em></h2><p className="section-note">The existing source page advertises the values shown. Confirm scope, dimensions and availability in the quotation; module/DP, angle and mounting ranges were not established in the reviewed listing.</p></div><div className="spec-table">{specifications.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></div></section>

    <section className="product-features section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Selection guidance</p><h2>Match the hob<br /><em>to the gear.</em></h2></div><p>These checks help frame an enquiry; they are not a claim that every configuration is available.</p></div><div className="feature-grid"><article><span>01</span><h3>Tooth system</h3><p>Identify the gear type and tooth geometry. Distinguish standard external gears from spline, sprocket or worm-wheel requirements.</p></article><article><span>02</span><h3>Pitch and angle</h3><p>Provide module or DP, pressure angle and the normal or transverse reference where applicable.</p></article><article><span>03</span><h3>Mounting dimensions</h3><p>Specify bore, keyway or drive details, outside diameter and the cutting and overall lengths required.</p></article><article><span>04</span><h3>Grade and coating</h3><p>Share workpiece material and hardness, cutting conditions, coolant and preferred HSS grade or coating.</p></article><article><span>05</span><h3>Accuracy and inspection</h3><p>State the required standard, class and inspection documents. DIN references listed by the source need scope and edition confirmation.</p></article><article><span>06</span><h3>Quantity and destination</h3><p>Include quantity, delivery location and requested timing; price, MOQ and lead time are confirmed in the quotation.</p></article></div></div></section>

    <section className="applications-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Applications</p><h2>Gear tooling for<br /><em>specified work.</em></h2></div><p>Potential gear-manufacturing contexts only. Industry name alone does not establish cutter fit or approval.</p></div><div className="feature-grid">{applications.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="product-features section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Grade and coating</p><h2>Choose from verified<br /><em>options.</em></h2></div><p>The source lists M2, M35, M42, Golden TiN, Futura and Alcoran. Confirm availability and suitability for the selected cutter; no universal tool-life or performance result is promised.</p></div></div></section>

    <section className="quality-section section"><div className="shell product-two-column"><div><p className="eyebrow">Inspection requirements</p><h2>Put acceptance criteria<br /><em>in the enquiry.</em></h2></div><div className="quality-list"><p>Share the standard, class, measurement method and any document requirement before quotation. No product accuracy class or certification is claimed beyond the source-listed standards.</p><span>Send the drawing revision and gear data.</span><span>Identify required inspection or traceability documents.</span><span>Confirm standard, class and dimensions in the written offer.</span></div></div></section>

    <section id="faqs" className="faq-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Prepare a clear<br /><em>hob enquiry.</em></h2></div></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section id="enquiry" className="product-enquiry section"><div className="shell product-two-column"><div><p className="eyebrow">HSS gear hob cutter RFQ</p><h2>Share your gear<br /><em>specification.</em></h2><p>Include the drawing, module/DP, pressure angle, mounting dimensions and quantity. The optional drawing is sent to the configured enquiry inbox and is not published on the website.</p><div className="contact-list"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={`${company.whatsapp}?text=${encodeURIComponent("I need an HSS gear hob cutter quotation. Module/DP: __; pressure angle: __; quantity: __.")}`} target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a></div></div><GearHobEnquiryForm /></div></section>

    <section className="related-products section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Related tools</p><h2>Other cutting<br /><em>requirements.</em></h2></div></div><div className="related-grid"><Link href="/products/milling-gear-cutters/hss-end-mill-cutters"><Image src="/images/products/hss-end-mill-cutter.jpg" alt="HSS end mill cutter" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS End Mill Cutter</strong></Link><Link href="/products/hss-reamers/hss-machine-reamers"><Image src="/images/products/hss-machine-reamer.jpg" alt="HSS machine reamer" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Machine Reamer</strong></Link><Link href="/products/hss-tool-bits/hss-round-tool-bits"><Image src="/images/products/hss-round-tool-bit.png" alt="HSS round tool bit" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Round Tool Bit</strong></Link><Link href="/products/hss-tool-bits/hss-square-tool-bits"><Image src="/images/products/hss-square-tool-bit.jpg" alt="HSS square tool bit" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Square Tool Bit</strong></Link></div></div></section>
    <div className="mobile-contact-bar"><a href={company.phoneHref}>Call</a><a href={`${company.whatsapp}?text=${encodeURIComponent("I need an HSS gear hob cutter quotation. Module/DP: __; pressure angle: __; quantity: __.")}`} target="_blank" rel="noreferrer">WhatsApp</a><a href="#enquiry">Request quote</a></div>
  </main></SiteShell>;
}