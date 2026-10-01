import Image from "next/image";
import Link from "next/link";
import { ProductEnquiryForm } from "@/components/product-enquiry-form";
import { SiteShell } from "@/components/site-shell";
import { company } from "@/data/site";
import { handTapIndustries, handTapThreadFamilies } from "@/data/hand-tap";

const specifications = [
  ["Product", "Spiral Point Hand Tap - SPPT"],
  ["Material grades", "M2 (HSS), M35 (HSS-E), M42 (HSS-ECO)"],
  ["Hardness", "62-64 HRC"],
  ["Listed size range", "6 mm to 100 mm"],
  ["Finish", "Ground thread"],
  ["Specification references", "IS 6175 Part 2:1992, IS 6175 Part 4:1991 and BS 949 Part 2:1979"],
  ["Thread forms", "60 degrees and 55 degrees"],
  ["Tolerance", "6H, 6G, 7H, Z-3, Z-4 or required gauge"],
  ["Flutes", "Straight flutes; 4-flute or 6-flute options"],
  ["Lead / chamfer", "2-thread, 4-thread or 6-thread lead"],
  ["Coating names listed", "Golden TiN, Futura and Alcoran"],
  ["Country of origin", "India"],
];

const features = [
  ["Spiral point geometry", "A spiral point route for suitable through-hole threading where chip movement and machine conditions support the geometry."],
  ["HSS grade choices", "Discuss M2, M35 or M42 according to the workpiece material, machine and production requirement."],
  ["Ground-thread finish", "Supports controlled thread formation and dimensional review for the selected configuration."],
  ["Through-hole review", "Confirm hole type, depth, chip direction, lubrication, alignment and tapping cycle before selection."],
  ["Thread-family coverage", "Metric, British, unified and pipe-thread requirements can be reviewed against the exact drawing."],
  ["Bulk and custom review", "Share size-wise quantities, tolerance, coating, inspection and repeat-production requirements."],
];

const faqs = [
  ["What is a spiral point tap used for?", "It is used for suitable through-hole threading operations where the spiral point geometry supports chip movement and the machine process."],
  ["What sizes are listed?", "The source product information lists 6 mm to 100 mm. Confirm the exact size, pitch, standard and availability in the quotation."],
  ["Is SPPT suitable for every material?", "No. Selection depends on the workpiece material, hole type, machine, lubrication, thread requirement and production cycle."],
  ["Which material grades are available?", "The listed options are M2, M35 and M42. Grade selection depends on the workpiece and process."],
  ["Can you support bulk or custom requirements?", "Yes. Share size-wise quantities, drawings, tolerance, coating, inspection and delivery requirements for review."],
];

export function SpiralPointTapPage() {
  return <SiteShell><main id="top" className="product-page">
    <nav className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Products</Link><span aria-hidden="true">/</span><Link href="/products/hss-threading-taps">HSS Threading Taps</Link><span aria-hidden="true">/</span><strong aria-current="page">Spiral Point Hand Tap - SPPT</strong></nav>
    <section className="product-hero"><div className="shell product-hero-grid"><div className="product-gallery"><div className="product-gallery-main"><Image src="https://swastikgrand.com/wp-content/uploads/2024/04/SPT-Tap-Spiral-Point-Tap.jpg" alt="SWAGIN Spiral Point Hand Tap SPPT" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="product-gallery-image" /></div><p className="product-gallery-caption">Spiral Point Hand Tap - SPPT</p><p className="product-gallery-note">Product-family image shown for this SPPT route. Confirm the selected configuration in your quotation.</p></div><div className="product-summary"><p className="eyebrow">Spiral point tap manufacturer · Ludhiana, India</p><h1>Spiral Point<br /><em>Hand Tap - SPPT</em></h1><p className="product-subtitle">Spiral point geometry for suitable through-hole threading.</p><p className="product-description">SWAGIN HSS spiral point hand taps are listed for suitable through-hole threading where the machine, material, hole preparation, chip movement and thread standard are reviewed together. Share the exact requirement for a standard, bulk, export or custom enquiry.</p><div className="product-facts"><span><b>M2 · M35 · M42</b><small>Material grades</small></span><span><b>6–100 mm</b><small>Listed size range</small></span><span><b>62–64 HRC</b><small>Listed hardness</small></span></div><div className="product-actions"><Link className="button button-yellow" href="#enquiry">Request a product quote <span aria-hidden="true">↗</span></Link><a className="product-phone" href={company.phoneHref}>Call manufacturer<br /><strong>{company.phone}</strong></a></div><div className="product-quick-links"><a href="#specifications">Specifications</a><a href="#applications">Applications</a><a href="#faqs">FAQs</a></div></div></div></section>
    <section className="product-overview section"><div className="shell product-two-column"><div><p className="eyebrow">Product overview</p><h2>Spiral point threading matched to the job.</h2></div><div><p>Spiral point tap selection depends on through-hole access, workpiece material, chip flow, machine cycle, lubrication, thread depth and the required thread specification.</p><p className="callout">SPPT selection is not based on size alone. Confirm the hole type, thread standard, tolerance, geometry, coating, dimensions and process conditions in the quotation.</p></div></div></section>
    <section className="product-features section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Application-led review</p><h2>Details that help<br /><em>you choose.</em></h2></div><p>Review the tool against the actual material, machine and hole. No universal tool-life, throughput or cost-saving result is guaranteed.</p></div><div className="feature-grid">{features.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section id="specifications" className="section specifications"><div className="shell product-two-column"><div><p className="eyebrow">Technical information</p><h2>Confirm the right SPPT configuration.</h2><p className="section-note">These are listed product-family details. Confirm exact dimensions, grade, coating, tolerance, gauge, availability and commercial terms in the quotation.</p></div><div className="spec-table">{specifications.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></div></section>
    <section className="thread-section section"><div className="shell thread-grid"><div><p className="eyebrow">Thread families</p><h2>Find the thread<br /><em>you need.</em></h2><p>These are enquiry options, not a live inventory claim. Send the exact component drawing where a thread designation is ambiguous.</p></div><div className="thread-panels">{handTapThreadFamilies.map(([group, options]) => <div key={group}><strong>{group}</strong><span>{options}</span></div>)}</div></div></section>
    <section id="applications" className="applications-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Industrial uses</p><h2>Your component.<br /><em>Your through-hole route.</em></h2></div><p>Illustrative industry applications, not customer or project claims. Discuss the drawing, material, machine, hole and production quantity with the manufacturer.</p></div><div className="industry-grid">{handTapIndustries.map(([title, text, image], index) => <article key={title}><div className="industry-image"><Image src={image} alt={`${title} SPPT application example`} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="industry-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><a href={`/products/hss-threading-taps/hss-spiral-point-taps?industry=${encodeURIComponent(title)}#enquiry`}>Discuss this application <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section id="enquiry" className="product-enquiry section"><div className="shell product-two-column"><div><p className="eyebrow">SPPT enquiry</p><h2>Tell us what you need.<br /><em>We will review the route.</em></h2><p>Share the thread, material, machine, hole type, quantity, coating or drawing reference. The enquiry is sent to the configured company inbox.</p><div className="contact-list"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a></div></div><ProductEnquiryForm productName="Spiral Point Hand Tap - SPPT" /></div></section>
    <section id="faqs" className="faq-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Clear answers<br /><em>before you order.</em></h2></div></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="related-products section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Continue exploring</p><h2>Related tools<br /><em>for the job.</em></h2></div><p>Review hand taps, hand tap sets, machine taps and other threading routes for the application.</p></div><div className="related-grid"><Link href="/products/hss-threading-taps/hss-hand-taps"><Image src="/images/products/hss-hand-tap.jpg" alt="HSS Threading Hand Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Threading Hand Tap</strong></Link><Link href="/products/hss-threading-taps/hss-machine-taps"><Image src="/images/products/hss-machine-tap.jpg" alt="HSS Machine Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Machine Tap</strong></Link><Link href="/products/hss-threading-taps/hss-hand-tap-sets"><Image src="/images/products/hss-hand-tap-set.jpg" alt="HSS Hand Tap Set" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Hand Tap Set</strong></Link></div></div></section>
    <div className="mobile-contact-bar"><a href={company.phoneHref}>Call</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#enquiry">Request quote</a></div>
  </main></SiteShell>;
}
