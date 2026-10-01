import Image from "next/image";
import Link from "next/link";
import { ProductEnquiryForm } from "@/components/product-enquiry-form";
import { SiteShell } from "@/components/site-shell";
import { company } from "@/data/site";
import { handTapIndustries, handTapThreadFamilies } from "@/data/hand-tap";

const specifications = [
  ["Product", "HSS Long Nut Threading Tap"],
  ["Material grades", "M2 (HSS), M35 (HSS-E), M42 (HSS-ECO)"],
  ["Hardness", "62-64 HRC"],
  ["Finish", "Ground thread"],
  ["Thread forms", "60 degrees and 55 degrees"],
  ["Tolerance", "6H, 6G, 7H, Z-3, Z-4 or required gauge"],
  ["Flutes", "Straight flutes; configuration confirmed for the selected tap"],
  ["Lead / chamfer", "2-thread, 4-thread or 6-thread lead"],
  ["Coating", "Discuss Golden TiN, Futura, Alcoran or another required coating"],
  ["Country of origin", "India"],
];

const features = [
  ["Long nut-tap format", "Extended reach for suitable nut-threading operations where component depth or access requires a longer tool format."],
  ["Machine process review", "Confirm machine, alignment, hole preparation, material, chip handling and production cycle before selection."],
  ["HSS grade choices", "Discuss M2, M35 or M42 according to the nut material and application."],
  ["Thread-family coverage", "Metric, British, unified and pipe-thread requirements can be reviewed against the exact drawing."],
  ["Lead options", "Review 2-, 4- or 6-thread lead options against thread depth and entry conditions."],
  ["Bulk and custom review", "Share size-wise quantities, length, tolerance, coating, inspection and repeat-production requirements."],
];

const faqs = [
  ["What is a long nut tap used for?", "It is used for suitable internal nut-threading operations where extended reach or component access needs to be considered."],
  ["What details are needed for selection?", "Share thread, nut material, thread length, overall length, machine, quantity, tolerance and any drawing or gauge requirement."],
  ["Can coating be specified?", "Yes. Discuss the required coating and workpiece process so the available configuration can be confirmed."],
  ["Can I request a custom long nut tap?", "Yes. Share the drawing, thread, length, tolerance, material, machine and quantity for a feasibility review."],
  ["Can you support bulk orders?", "Yes. Send a size-wise requirement list, grade, coating, repeat schedule and delivery requirements for quotation."],
];

export function LongNutTapPage() {
  return <SiteShell><main id="top" className="product-page">
    <nav className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Products</Link><span aria-hidden="true">/</span><Link href="/products/hss-threading-taps">HSS Threading Taps</Link><span aria-hidden="true">/</span><strong aria-current="page">HSS Long Nut Tap</strong></nav>
    <section className="product-hero"><div className="shell product-hero-grid"><div className="product-gallery"><div className="product-gallery-main"><Image src="https://swastikgrand.com/wp-content/uploads/2022/12/Nut-Thread-Machine-Tap.jpg" alt="SWAGIN HSS long nut threading tap" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="product-gallery-image" /></div><p className="product-gallery-caption">HSS Long Nut Threading Tap</p><p className="product-gallery-note">Product-family image shown for this long nut-tap route. Confirm the selected configuration in your quotation.</p></div><div className="product-summary"><p className="eyebrow">Long nut tap manufacturer · Ludhiana, India</p><h1>HSS Long Nut<br /><em>Threading Tap</em></h1><p className="product-subtitle">Extended reach for suitable nut-threading operations.</p><p className="product-description">SWAGIN HSS long nut threading taps are listed for suitable internal nut-threading applications where tool reach, thread length, material, machine and quantity are reviewed together. Share the exact requirement for a standard, bulk, export or custom enquiry.</p><div className="product-facts"><span><b>M2 · M35 · M42</b><small>Material grades</small></span><span><b>Long format</b><small>Extended reach</small></span><span><b>62–64 HRC</b><small>Listed hardness</small></span></div><div className="product-actions"><Link className="button button-yellow" href="#enquiry">Request a product quote <span aria-hidden="true">↗</span></Link><a className="product-phone" href={company.phoneHref}>Call manufacturer<br /><strong>{company.phone}</strong></a></div><div className="product-quick-links"><a href="#specifications">Specifications</a><a href="#applications">Applications</a><a href="#faqs">FAQs</a></div></div></div></section>
    <section className="product-overview section"><div className="shell product-two-column"><div><p className="eyebrow">Product overview</p><h2>Extended reach for suitable nut threading.</h2></div><div><p>Long nut tap selection depends on the component envelope, required reach, thread designation, nut material, machine setup, hole preparation, tolerance and production quantity.</p><p className="callout">A long nut tap is not automatically suitable for every nut-production cycle. Confirm the machine, reach, thread, material, coating and acceptance requirements in the quotation.</p></div></div></section>
    <section className="product-features section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Application-led review</p><h2>Details that help<br /><em>you choose.</em></h2></div><p>Review the tool against the actual nut, machine and process. No universal tool-life, throughput or cost-saving result is guaranteed.</p></div><div className="feature-grid">{features.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section id="specifications" className="section specifications"><div className="shell product-two-column"><div><p className="eyebrow">Technical information</p><h2>Confirm the right long nut-tap configuration.</h2><p className="section-note">These are listed product-family details. Confirm exact dimensions, reach, grade, coating, tolerance, gauge, availability and commercial terms in the quotation.</p></div><div className="spec-table">{specifications.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></div></section>
    <section className="thread-section section"><div className="shell thread-grid"><div><p className="eyebrow">Thread families</p><h2>Find the thread<br /><em>you need.</em></h2><p>These are enquiry options, not a live inventory claim. Send the exact component drawing where a thread designation is ambiguous.</p></div><div className="thread-panels">{handTapThreadFamilies.map(([group, options]) => <div key={group}><strong>{group}</strong><span>{options}</span></div>)}</div></div></section>
    <section id="applications" className="applications-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Industrial uses</p><h2>Your component.<br /><em>Your nut production.</em></h2></div><p>Illustrative industry applications, not customer or project claims. Discuss the drawing, material, machine, hole and production quantity with the manufacturer.</p></div><div className="industry-grid">{handTapIndustries.slice(0, 6).map(([title, text, image], index) => <article key={title}><div className="industry-image"><Image src={image} alt={`${title} long nut tap application example`} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="industry-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><a href={`/products/hss-threading-taps/hss-long-nut-taps?industry=${encodeURIComponent(title)}#enquiry`}>Discuss this application <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section id="enquiry" className="product-enquiry section"><div className="shell product-two-column"><div><p className="eyebrow">HSS long nut tap enquiry</p><h2>Tell us what you need.<br /><em>We will review the route.</em></h2><p>Share the thread, material, machine, quantity, reach, coating or drawing reference. The enquiry is sent to the configured company inbox.</p><div className="contact-list"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a></div></div><ProductEnquiryForm productName="HSS Long Nut Threading Tap" /></div></section>
    <section id="faqs" className="faq-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Clear answers<br /><em>before you order.</em></h2></div></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="related-products section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Continue exploring</p><h2>Related tools<br /><em>for the job.</em></h2></div><p>Compare the short nut-tap route or review the wider threading range.</p></div><div className="related-grid"><Link href="/products/hss-threading-taps/hss-short-nut-taps"><Image src="/images/products/hss-short-nut-tap.jpg" alt="HSS Short Nut Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Short Nut Tap</strong></Link><Link href="/products/hss-threading-taps/hss-machine-taps"><Image src="/images/products/hss-machine-tap.jpg" alt="HSS Machine Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Machine Tap</strong></Link><Link href="/products"><Image src="/images/products/hss-hand-tap.jpg" alt="HSS Threading Hand Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>View all products</strong></Link></div></div></section>
    <div className="mobile-contact-bar"><a href={company.phoneHref}>Call</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#enquiry">Request quote</a></div>
  </main></SiteShell>;
}
