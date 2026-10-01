import Image from "next/image";
import Link from "next/link";
import { ProductEnquiryForm } from "@/components/product-enquiry-form";
import { SiteShell } from "@/components/site-shell";
import { company } from "@/data/site";
import { handTapIndustries, handTapThreadFamilies } from "@/data/hand-tap";

const specifications = [
  ["Product", "HSS ACME Threading Tap"],
  ["Material grades", "M2 (HSS), M35 (HSS-E), M42 (HSS-ECO)"],
  ["Hardness", "62-64 HRC"],
  ["Listed size range", "6 mm to 100 mm"],
  ["Finish", "Ground thread"],
  ["Specification references", "IS 6175 Part 2:1992, IS 6175 Part 4:1991 and BS 949 Part 2:1979"],
  ["Thread form", "29-degree ACME thread form"],
  ["Tolerance", "6H, 6G, 7H, Z-3, Z-4 or required gauge"],
  ["Flutes", "Straight flutes; 3-flute, 4-flute, 5-flute or 6-flute options"],
  ["Lead / chamfer", "2-thread, 4-thread or 6-thread lead"],
  ["Coating names listed", "Golden TiN, Futura and Alcoran"],
  ["Country of origin", "India"],
];

const features = [
  ["29-degree ACME form", "Designed for suitable ACME internal-thread requirements in motion, drive and load-bearing components."],
  ["HSS grade choices", "Discuss M2, M35 or M42 according to the workpiece material, machine and production requirement."],
  ["Ground-thread finish", "Supports controlled thread formation and dimensional review for the selected configuration."],
  ["Drawing-led selection", "Confirm pitch, diameter, tolerance, depth, lead, machine and component function against the drawing."],
  ["Flute and lead options", "Review 3-, 4-, 5- or 6-flute configurations and 2-, 4- or 6-thread lead options."],
  ["Bulk and custom review", "Share size-wise quantities, coating, inspection and repeat-production requirements for quotation."],
];

const faqs = [
  ["What is an ACME thread tap used for?", "It is used for suitable internal ACME threading requirements in components such as lead-screw, motion and load-bearing assemblies."],
  ["What is the ACME thread angle?", "The source product information lists a 29-degree ACME thread form. Confirm the exact profile and dimensions against the component drawing."],
  ["What sizes are listed?", "The source product information lists 6 mm to 100 mm. Confirm the exact diameter, pitch, tolerance and availability in the quotation."],
  ["Can you make custom ACME taps?", "Yes. Share the drawing, pitch, diameter, length, tolerance, material, machine and quantity for a feasibility review."],
  ["Which coatings are listed?", "Golden TiN, Futura and Alcoran are listed coating names. Confirm the available coating for the selected configuration."],
];

const globalThreadForms = [
  ["ISO Metric Coarse (M)", "Fastener (Metric)", "60°", "Symmetric V-thread; flat crests, rounded roots.", "General machinery, automotive, consumer goods."],
  ["ISO Metric Fine (MF)", "Fastener (Metric)", "60°", "Shorter thread depth and tighter pitch spacing.", "Precision adjustments, high-vibration environments."],
  ["ISO Metric Aerospace (MJ)", "Aerospace (Metric)", "60°", "Enlarged, highly controlled root radius.", "Aircraft structures, commercial jet engines."],
  ["Unified National Coarse (UNC)", "Fastener (Imperial)", "60°", "Flat crests and roots; standard US system.", "Construction, structural engineering, heavy machinery."],
  ["Unified National Fine (UNF)", "Fastener (Imperial)", "60°", "Higher tensile strength from tightly spaced pitch.", "High-performance automotive, aerospace fasteners."],
  ["Unified Extra Fine (UNEF)", "Fastener (Imperial)", "60°", "Ultra-fine pitch for minimal axial travel per turn.", "Thin-walled tubing, optical mounts, electronics."],
  ["Unified Aerospace (UNJ)", "Aerospace (Imperial)", "60°", "Mandated larger root radius to help prevent cracking.", "Military aircraft, rocket boosters, space vehicles."],
  ["British Whitworth (BSW)", "Legacy Fastener", "55°", "Rounded crests and roots; original standard.", "Stage rigging, photography tripods, legacy technology."],
  ["British Standard Fine (BSF)", "Legacy Fastener", "55°", "Fine-pitch version of the Whitworth profile.", "Vintage British cars, marine gearboxes."],
  ["British Association (BA)", "Micro / Miniature", "47.5°", "Sharp angle with heavily rounded crests and roots.", "Clocks, historic telephones, optical instruments."],
  ["British Standard Cycle (BSC)", "Bicycle Specific", "60°", "Typically a fixed 26 TPI fine-pitch architecture.", "Bicycle bottom brackets, pedals, vintage headsets."],
  ["National Pipe Taper (NPT)", "Pipe / Fluid", "60°", "1:16 taper; crests and roots wedge tight to seal.", "Plumbing, commercial gas lines, hydraulic systems."],
  ["National Pipe Dryseal (NPTF)", "Pipe / Fluid", "60°", "Metal-to-metal crush seal without sealing tape.", "High-pressure fuel lines, hazardous chemical lines."],
  ["British Parallel Pipe (BSPP / G)", "Pipe / Fluid", "55°", "Straight pipe thread; requires a mechanical seal.", "Low-pressure pneumatic links, fluid ports."],
  ["British Tapered Pipe (BSPT / R)", "Pipe / Fluid", "55°", "Tapered Whitworth profile sealing on the threads.", "European and Asian building infrastructure, piping."],
  ["Acme", "Power Transmission", "29°", "Broad trapezoidal profile with flat tops.", "Lathe lead screws, heavy milling vises, jacks."],
  ["Stub Acme", "Power Transmission", "29°", "Truncated-height variant for tight spaces.", "Valve stems, compact aerospace actuators."],
  ["Metric Trapezoidal (Tr)", "Power Transmission", "30°", "Metric equivalent to the Acme power thread profile.", "CNC linear actuators, factory automation machinery."],
  ["Square", "Power Transmission", "90°", "Parallel flanks; high efficiency with low radial burst.", "Jack screws, heavy mechanical industrial presses."],
  ["Buttress (Sawtooth)", "High One-Way Load", "7° / 45°", "Asymmetric profile for extreme force in one direction.", "Artillery breech blocks, plastic bottle caps."],
  ["Knuckle", "Debris Resistant", "Circular", "Smooth, rolling-wave profile that resists dirt fouling.", "Railway coach couplers, fire hoses, lightbulbs."],
  ["API Round (8 / 10-Round)", "Oil & Gas", "60°", "Deeply radiused V-thread for high pressures.", "Oil-well casing pipes, deep production tubing."],
  ["API Buttress", "Oil & Gas", "3° / 45°", "Asymmetric profile for enormous hanging weight.", "Deep well strings hanging thousands of metres down."],
  ["NIHS (Swiss Watch)", "Watchmaking", "60°", "Ultra-miniature profile from 0.30 mm to 2.00 mm.", "Luxury Swiss timepieces, microscopic electronics."],
  ["Panzergewinde (Pg)", "Conduit (Legacy)", "80°", "Shallow V-thread for thin metal walls.", "German heavy industrial electrical cable conduits."],
  ["Sellers (Franklin Institute)", "Historical", "60°", "1864 standard with flat crests and roots.", "19th-century American trains and early machines."],
  ["Lowenherz", "Historical", "53° 8'", "Unique German angle optimized for soft brass.", "Early European laboratory and measuring gear."],
];

export function AcmeThreadTapPage() {
  return <SiteShell><main id="top" className="product-page">
    <nav className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Products</Link><span aria-hidden="true">/</span><Link href="/products/hss-threading-taps">HSS Threading Taps</Link><span aria-hidden="true">/</span><strong aria-current="page">HSS ACME Threading Tap</strong></nav>
    <section className="product-hero"><div className="shell product-hero-grid"><div className="product-gallery"><div className="product-gallery-main"><Image src="https://swastikgrand.com/wp-content/uploads/2022/12/HSS-Acme-Threading-Tap.jpg" alt="SWAGIN HSS ACME threading tap" fill priority sizes="(max-width: 900px) 100vw, 54vw" className="product-gallery-image" /></div><p className="product-gallery-caption">HSS ACME Threading Tap</p><p className="product-gallery-note">Product-family image shown for this ACME route. Confirm the selected configuration in your quotation.</p></div><div className="product-summary"><p className="eyebrow">ACME tap manufacturer · Ludhiana, India</p><h1>HSS ACME<br /><em>Threading Tap</em></h1><p className="product-subtitle">29-degree ACME threading for suitable motion and drive components.</p><p className="product-description">SWAGIN HSS ACME thread taps are listed for suitable internal ACME threading where profile, pitch, diameter, material, machine and component function are reviewed together. Share the exact drawing for a standard, bulk, export or custom enquiry.</p><div className="product-facts"><span><b>M2 · M35 · M42</b><small>Material grades</small></span><span><b>6–100 mm</b><small>Listed size range</small></span><span><b>62–64 HRC</b><small>Listed hardness</small></span></div><div className="product-actions"><Link className="button button-yellow" href="#enquiry">Request a product quote <span aria-hidden="true">↗</span></Link><a className="product-phone" href={company.phoneHref}>Call manufacturer<br /><strong>{company.phone}</strong></a></div><div className="product-quick-links"><a href="#specifications">Specifications</a><a href="#applications">Applications</a><a href="#faqs">FAQs</a></div></div></div></section>
    <section className="product-overview section"><div className="shell product-two-column"><div><p className="eyebrow">Product overview</p><h2>ACME threading matched to the job.</h2></div><div><p>ACME thread tap selection is drawing-led. Confirm the 29-degree profile, pitch, diameter, tolerance, thread depth, machine setup, material and the function of the threaded assembly.</p><p className="callout">ACME selection is not based on size alone. Confirm the exact profile, dimensions, lead, coating and process conditions in the quotation.</p></div></div></section>
    <section className="product-features section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Application-led review</p><h2>Details that help<br /><em>you choose.</em></h2></div><p>Review the tool against the actual component, machine and material. No universal tool-life, load, accuracy or cost-saving result is guaranteed.</p></div><div className="feature-grid">{features.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section id="specifications" className="section specifications"><div className="shell product-two-column"><div><p className="eyebrow">Technical information</p><h2>Confirm the right ACME configuration.</h2><p className="section-note">These are listed product-family details. Confirm exact dimensions, grade, coating, tolerance, gauge, availability and commercial terms in the quotation.</p></div><div className="spec-table">{specifications.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div></div></section>
    <section className="thread-forms-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Global reference</p><h2>Thread forms across<br /><em>engineering.</em></h2></div><p>This reference chart covers common, specialist and historical thread systems. Use it to identify a starting point, then confirm the exact standard and drawing before selecting a tap.</p></div><div className="thread-forms-table-wrap"><table className="thread-forms-table"><caption>Global master thread forms chart</caption><thead><tr><th>Thread form</th><th>System category</th><th>Angle</th><th>Geometry &amp; key profile</th><th>Primary applications</th></tr></thead><tbody>{globalThreadForms.map(([name, category, angle, geometry, applications]) => <tr key={name}><th scope="row">{name}</th><td>{category}</td><td>{angle}</td><td>{geometry}</td><td>{applications}</td></tr>)}</tbody></table></div><div className="thread-reference-actions"><strong>Need help identifying a thread?</strong><span>Send a drawing or specification for review. A tap-drill calculator, pitch-gauge measurement guide or CAD formulas can be added as a separate technical tool.</span><Link className="under-link" href="#enquiry">Discuss your thread requirement <span aria-hidden="true">↗</span></Link></div></div></section>
    <section id="applications" className="applications-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Industrial uses</p><h2>Your component.<br /><em>Your ACME route.</em></h2></div><p>Illustrative industry applications, not customer or project claims. Discuss the drawing, material, machine, hole and production quantity with the manufacturer.</p></div><div className="industry-grid">{handTapIndustries.map(([title, text, image], index) => <article key={title}><div className="industry-image"><Image src={image} alt={`${title} ACME tap application example`} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="industry-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><a href={`/products/hss-threading-taps/hss-acme-thread-taps?industry=${encodeURIComponent(title)}#enquiry`}>Discuss this application <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
    <section id="enquiry" className="product-enquiry section"><div className="shell product-two-column"><div><p className="eyebrow">HSS ACME tap enquiry</p><h2>Tell us what you need.<br /><em>We will review the route.</em></h2><p>Share the ACME profile, pitch, diameter, material, machine, quantity, coating or drawing reference. The enquiry is sent to the configured company inbox.</p><div className="contact-list"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp us <span aria-hidden="true">↗</span></a></div></div><ProductEnquiryForm productName="HSS ACME Threading Tap" /></div></section>
    <section id="faqs" className="faq-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Clear answers<br /><em>before you order.</em></h2></div></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="related-products section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Continue exploring</p><h2>Related tools<br /><em>for the job.</em></h2></div><p>Review machine taps, nut taps, hand taps and other special-thread routes for the application.</p></div><div className="related-grid"><Link href="/products/hss-threading-taps/hss-machine-taps"><Image src="/images/products/hss-machine-tap.jpg" alt="HSS Machine Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Machine Tap</strong></Link><Link href="/products/hss-threading-taps/hss-long-nut-taps"><Image src="/images/products/hss-nut-tap.jpg" alt="HSS Long Nut Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Long Nut Tap</strong></Link><Link href="/products/hss-threading-taps/hss-hand-taps"><Image src="/images/products/hss-hand-tap.jpg" alt="HSS Threading Hand Tap" fill sizes="(max-width: 560px) 100vw, 33vw" /><strong>HSS Threading Hand Tap</strong></Link></div></div></section>
    <div className="mobile-contact-bar"><a href={company.phoneHref}>Call</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#enquiry">Request quote</a></div>
  </main></SiteShell>;
}
