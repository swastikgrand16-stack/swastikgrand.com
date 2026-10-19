import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClickToLoadVideo } from "@/components/click-to-load-video";
import { EnquiryForm } from "@/components/enquiry-form";
import { EnquiryPrefillLink } from "@/components/enquiry-prefill-link";
import { HomeProductFamilyCard } from "@/components/home-product-family-card";
import { SiteShell } from "@/components/site-shell";
import { company } from "@/data/site";
import { productMenu, type ProductMenuItem } from "@/data/menu";

export const metadata: Metadata = {
  title: "HSS Taps & Cutting Tools Manufacturer and Exporter in India | SWAGIN",
  description: "SWAGIN HSS hand taps, machine taps, reamers, tool bits, dies and cutters from Ludhiana, India. Request a quote for bulk, export or custom tooling.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "HSS Taps & Cutting Tools Manufacturer and Exporter in India | SWAGIN",
    description: "SWAGIN HSS hand taps, machine taps, reamers, tool bits, dies and cutters from Swastik Grand Industries, Ludhiana.",
    url: "https://swastikgrand.com/",
    siteName: "Swastik Grand Industries",
    type: "website",
    images: [{ url: "/images/products/hss-hand-tap.jpg", alt: "SWAGIN HSS threading hand tap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSS Taps & Cutting Tools Manufacturer and Exporter in India | SWAGIN",
    description: "SWAGIN HSS taps and cutting tools from Ludhiana, India. Request a quote for bulk, export or custom tooling.",
    images: ["/images/products/hss-hand-tap.jpg"],
  },
};

function getProductCategory(href: string): ProductMenuItem {
  const category = productMenu.find((item) => item.href === href);
  if (!category) throw new Error(`Homepage product family is missing from the product menu: ${href}`);
  return category;
}

const productFamilies = [
  {
    title: "Threading taps",
    description: "Hand, machine, nut, spiral-point, ACME, thread-forming and Heli-Coil STI taps.",
    image: "/images/products/hss-hand-tap.jpg",
    categories: [getProductCategory("/products/hss-threading-taps")],
  },
  {
    title: "Reamers",
    description: "Hand and machine reamers for suitable prepared-hole finishing requirements.",
    image: "/images/products/hss-reamers.jpg",
    categories: [getProductCategory("/products/hss-reamers")],
  },
  {
    title: "Tool bits and milling cutters",
    description: "Round and square tool bits, end mills and gear hob cutters.",
    image: "/images/products/hss-gear-hob-cutter.jpg",
    categories: [
      getProductCategory("/products/hss-tool-bits"),
      getProductCategory("/products/milling-gear-cutters"),
    ],
  },
  {
    title: "Dies and thread rolling tools",
    description: "Round cutting dies cut external threads; circular rolls form threads.",
    image: "/images/products/circular-thread-roll.jpg",
    categories: [getProductCategory("/products/threading-dies-rolls")],
  },
];

const productImages: Record<string, string> = {
  "/products/hss-threading-taps/hss-hand-taps": "/images/products/hss-hand-tap.jpg",
  "/products/hss-threading-taps/hss-hand-tap-sets": "/images/products/hss-hand-tap-set.jpg",
  "/products/hss-threading-taps/hss-machine-taps": "/images/products/hss-machine-tap.jpg",
  "/products/hss-threading-taps/hss-short-nut-taps": "/images/products/hss-short-nut-tap.jpg",
  "/products/hss-threading-taps/hss-long-nut-taps": "/images/products/hss-long-nut-threading-tap.jpg",
  "/products/hss-threading-taps/hss-spiral-point-taps": "/images/products/hss-sppt-tap.jpg",
  "/products/hss-threading-taps/hss-acme-thread-taps": "/images/products/hss-acme-tap.jpg",
  "/products/hss-threading-taps/hss-thread-forming-taps": "/images/products/hss-thread-forming-roll-tap.jpg",
  "/products/hss-threading-taps/hss-helicoil-sti-taps": "/images/products/hss-heli-coil-tap.jpg",
  "/products/hss-reamers/hss-hand-reamers": "/images/products/hss-reamers.jpg",
  "/products/hss-reamers/hss-machine-reamers": "/images/products/hss-machine-reamer.jpg",
  "/products/hss-tool-bits/hss-round-tool-bits": "/images/products/hss-round-tool-bit.png",
  "/products/hss-tool-bits/hss-square-tool-bits": "/images/products/hss-square-tool-bit.jpg",
  "/products/milling-gear-cutters/hss-end-mill-cutters": "/images/products/hss-end-mill-cutter.jpg",
  "/products/milling-gear-cutters/hss-gear-hob-cutters": "/images/products/hss-gear-hob-cutter.jpg",
  "/products/threading-dies-rolls/hss-round-thread-cutting-dies": "/images/products/hss-round-thread-cutting-die.jpg",
  "/products/threading-dies-rolls/circular-thread-rolling-dies": "/images/products/circular-thread-roll.jpg",
};

const applications = [
  {
    title: "Tool rooms and die work",
    image: "/images/general-engineering-workshop.jpg",
    alt: "General engineering workshop",
    family: "Tool bits and milling cutters",
  },
  {
    title: "Fastener and thread work",
    image: "/images/fasteners-assortment.jpg",
    alt: "Assorted metal fasteners",
    family: "Threading taps",
  },
  {
    title: "Bicycle components",
    image: "/images/bicycle-components.jpg",
    alt: "Bicycle components",
    family: "Reamers",
  },
  {
    title: "Automotive components",
    image: "/images/vehicle-maintenance.jpg",
    alt: "Vehicle maintenance work",
    family: "Threading taps",
  },
  {
    title: "General engineering and maintenance",
    image: "/images/general-engineering-workshop.jpg",
    alt: "General engineering workshop",
    family: "Threading taps",
  },
];

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://swastikgrand.com/#organization",
  name: company.name,
  url: "https://swastikgrand.com/",
  description: "Manufacturer and exporter of SWAGIN HSS taps, reamers, tool bits, dies and cutters from Ludhiana, India.",
  email: company.email,
  telephone: company.phone,
  brand: { "@type": "Brand", name: "SWAGIN" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1916, Street No. 36, Janta Nagar",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    postalCode: "141003",
    addressCountry: "IN",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://swastikgrand.com/#website",
  name: company.name,
  url: "https://swastikgrand.com/",
  publisher: { "@id": "https://swastikgrand.com/#organization" },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <SiteShell>
        <main className="home-main" id="top">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([organizationStructuredData, websiteStructuredData]).replace(/</g, "\\u003c"),
            }}
          />

          <section className="hero" aria-labelledby="home-heading">
            <div className="shell hero-grid">
              <div className="hero-copy">
                <div>
                  <p className="eyebrow">SWAGIN · Swastik Grand Industries · Ludhiana</p>
                  <h1 id="home-heading">HSS Cutting Tools Manufacturer &amp; Exporter in India</h1>
                  <p className="hero-text">SWAGIN threading taps and cutting tools from Swastik Grand Industries, Ludhiana.</p>
                  <p className="hero-intro">Manufacturer and exporter of HSS taps, reamers, tool bits, dies and cutters. Start with our <Link className="under-link" href="/products/hss-threading-taps/hss-hand-taps">HSS hand taps</Link>, or share your material, thread specification and quantity for a standard, bulk, export or custom-tool enquiry.</p>
                  <p className="hero-value">Standard, bulk, export and drawing-led custom enquiries.</p>
                  <div className="hero-actions">
                    <a className="button button-yellow" href="#enquiry">Request a Quote <Arrow /></a>
                    <a className="outline-link" href="#products">Explore Products <Arrow /></a>
                  </div>
                  <div className="hero-contact-actions" aria-label="Contact Swastik Grand Industries">
                    <a href={company.phoneHref} data-track-event="click_call" data-button-location="homepage-hero">Call {company.phone}</a>
                    <a href={company.whatsapp} target="_blank" rel="noreferrer" data-track-event="click_whatsapp" data-button-location="homepage-hero">WhatsApp <Arrow /></a>
                  </div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="home-hero-image">
                  <Image
                    src="/images/products/hss-hand-tap.jpg"
                    alt="SWAGIN HSS threading hand tap"
                    fill
                    priority
                    sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1304px) 45vw, 558px"
                  />
                </div>
                <p className="home-hero-caption">HSS threading tools for workshop and production requirements</p>
              </div>
            </div>
            <div className="shell home-trust-strip" aria-label="Company information">
              <span><b>Location</b>Ludhiana, Punjab, India</span>
              <span><b>Product brand</b>SWAGIN</span>
              <span><b>Enquiries</b>Standard, bulk, export and custom</span>
              <span><b>Quality</b>Quality document available</span>
            </div>
          </section>

          <section className="section products" id="products" aria-labelledby="products-heading">
            <div className="shell">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">The SWAGIN range</p>
                  <h2 id="products-heading">Explore Our HSS Taps and Cutting Tools</h2>
                </div>
                                  <p>Browse four product families, including <Link className="under-link" href="/products/hss-threading-taps/hss-hand-taps">HSS hand taps</Link> and <Link className="under-link" href="/products/hss-threading-taps/hss-machine-taps">HSS machine taps</Link>. Confirm specifications, availability and commercial terms with our team.</p>
              </div>
              <div className="home-product-family-grid">
                {productFamilies.map((family) => {
                  const products = family.categories.flatMap((category) =>
                    (category.children || [])
                      .filter((product) => product.href.startsWith("/products/"))
                      .map((product) => ({ product, category: category.label })),
                  );

                  return (
                    <HomeProductFamilyCard
                      key={family.title}
                      title={family.title}
                      description={family.description}
                      image={family.image}
                      categoryHref={family.categories[0].href}
                      products={products.map(({ product, category }) => ({
                        label: product.label,
                        href: product.href,
                        category,
                        image: productImages[product.href] ?? family.image,
                      }))}
                    />
                  );
                })}
              </div>
              <Link className="under-link" href="/products">View the full product catalogue <Arrow /></Link>
            </div>
          </section>

          <section className="custom-section home-custom-section" id="custom-taps" aria-labelledby="custom-heading">
            <div className="custom-copy">
              <p className="eyebrow">Custom tap manufacturing</p>
              <h2 id="custom-heading">Custom HSS Taps Made to Your Requirement</h2>
              <p>Share a drawing, sample reference or the thread and dimensional details you have. Our team can review the requirement and confirm feasibility and commercial terms before production.</p>
              <EnquiryPrefillLink className="button button-yellow" enquiryType="Custom" productFamily="Threading taps" data-track-event="click_custom_enquiry" data-button-location="homepage-custom-section">Discuss a Custom Tap <Arrow /></EnquiryPrefillLink>
            </div>
            <div className="custom-details">
              <p className="detail-title">How a custom enquiry proceeds</p>
              <ol className="custom-process-list">
                <li><b>01</b><span>Share a drawing, specification or sample reference.</span></li>
                <li><b>02</b><span>Technical review of the requested tool and application.</span></li>
                <li><b>03</b><span>Quotation and specification approval before production under agreed terms.</span></li>
              </ol>
              <p className="drawing-note">Useful details include diameter, pitch or TPI, thread standard, hand, overall and thread length, shank or square dimensions, grade, coating, tolerance and quantity. <a href={`mailto:${company.email}`}>Email drawings to {company.email} <Arrow /></a></p>
            </div>
          </section>

          <section className="section quality" id="quality" aria-labelledby="quality-heading">
            <div className="shell quality-grid">
              <div>
                <p className="eyebrow">Manufacturing and quality</p>
                <h2 id="quality-heading">Manufacturing and Quality Inspection</h2>
              </div>
              <div className="quality-proof">
                <a className="iso-certificate-link" href="/swastik-grand-industries-qms.pdf" target="_blank" rel="noreferrer" aria-label="View the ISO 9001:2015 quality management system certificate (PDF)" data-track-event="download_certificate" data-button-location="homepage-quality">
                  <span className="iso-certificate" aria-hidden="true">
                    <span className="iso-certificate-brand">SWASTIK GRAND INDUSTRIES</span>
                    <span className="iso-certificate-heading">QUALITY MANAGEMENT SYSTEM</span>
                    <span className="iso-certificate-standard">ISO <strong>9001:2015</strong></span>
                    <span className="iso-certificate-label">CERTIFICATE · VIEW PDF</span>
                  </span>
                </a>
                <div className="quality-proof-copy">
                  <p>The available certificate document records ISO 9001:2015 certification for Swastik Grand Industries, including manufacturing and export of HSS cutting and threading tools.</p>
                  <p>Open the certificate to review its stated scope and validity dates for your requirement.</p>
                  <div className="resource-links">
                    <a href="/swastik-grand-industries-qms.pdf" target="_blank" rel="noreferrer" data-track-event="download_certificate" data-button-location="homepage-quality">View ISO 9001:2015 certificate (PDF) <Arrow /></a>
                    <Link href="/about">About Swastik Grand Industries <Arrow /></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="video-section home-video-section" aria-labelledby="factory-video-heading">
            <div className="shell video-grid">
              <ClickToLoadVideo />
              <div>
                <p className="eyebrow">Factory introduction</p>
                <h2 id="factory-video-heading">SWAGIN Factory Introduction: Swastik Grand Industries</h2>
                <p>Watch the Swastik Grand Industries factory introduction. The player loads only when you choose to play it.</p>
                <a className="under-link" href="https://www.youtube.com/watch?v=BHTs56TPKFg" target="_blank" rel="noreferrer">Open on YouTube <Arrow /></a>
              </div>
            </div>
          </section>

          <section className="section home-applications" id="applications" aria-labelledby="applications-heading">
            <div className="shell">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Industrial applications</p>
                  <h2 id="applications-heading">Tools for Your Industry and Application</h2>
                </div>
                <p>Explore common machining and maintenance contexts. The right tool depends on the material, operation, machine and component specification.</p>
              </div>
              <div className="home-applications-grid">
                {applications.map((application) => (
                  <article className="home-application-card" key={application.title}>
                    <div className="home-application-image">
                      <Image src={application.image} alt={application.alt} fill sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1100px) 45vw, 285px" />
                    </div>
                    <h3>{application.title}</h3>
                    <EnquiryPrefillLink enquiryType="Standard" productFamily={application.family}>
                      Discuss an application <Arrow />
                    </EnquiryPrefillLink>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section home-reasons" aria-labelledby="reasons-heading">
            <div className="shell">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Why Swastik Grand</p>
                  <h2 id="reasons-heading">Why Buyers Contact SWAGIN for HSS Tools</h2>
                </div>
                <p>Share your operating requirements with the manufacturer and confirm product details before ordering.</p>
              </div>
              <div className="home-reasons-grid">
                <article><span>01</span><h3>Specification-led discussion</h3><p>Review thread, dimensions, material and machine details with your enquiry.</p></article>
                <article><span>02</span><h3>Custom requirement review</h3><p>Submit a drawing or sample reference for technical review and a quotation.</p></article>
                <article><span>03</span><h3>Direct manufacturer contact</h3><p>Contact Swastik Grand Industries in Ludhiana about product and order requirements.</p></article>
                <article><span>04</span><h3>Quality information</h3><p>Ask about the process and documentation relevant to the tooling order.</p></article>
              </div>
            </div>
          </section>

          <section className="order-section home-order-section" aria-labelledby="orders-heading">
            <div className="shell order-grid">
              <div>
                <p className="eyebrow">Commercial enquiries</p>
                <h2 id="orders-heading">Bulk Supply and Export Enquiries</h2>
              </div>
              <div className="order-options">
                <EnquiryPrefillLink enquiryType="Bulk" productFamily="Help me select" data-button-location="homepage-bulk">
                  <span>01</span><h3>Bulk requirements</h3><p>Share products, size-wise quantities and repeat requirements for a quotation.</p><b>Request bulk quotation <Arrow /></b>
                </EnquiryPrefillLink>
                <EnquiryPrefillLink enquiryType="Export" productFamily="Help me select" data-button-location="homepage-export">
                  <span>02</span><h3>Export requirements</h3><p>Include the destination country, quantities and document or delivery requirements.</p><b>Discuss export requirements <Arrow /></b>
                </EnquiryPrefillLink>
              </div>
            </div>
          </section>

          <section className="section home-faq" aria-labelledby="faq-heading">
            <div className="shell home-faq-grid">
              <div>
                <p className="eyebrow">Questions before you enquire</p>
                <h2 id="faq-heading">Frequently asked questions</h2>
              </div>
              <div className="home-faq-list">
                <details>
                  <summary>Which product families can I ask about?</summary>
                  <p>SWAGIN product information on this site covers threading taps, reamers, tool bits, milling and gear cutters, dies and thread rolling tools.</p>
                </details>
                <details>
                  <summary>What details help with a quotation?</summary>
                  <p>Share the product family, size or drawing, material, quantity and application details you know. You can send an initial enquiry if some details are not yet available.</p>
                </details>
                <details>
                  <summary>Can I request a custom tap?</summary>
                  <p>Yes. Send the drawing, sample reference or thread details for review. Feasibility, specifications and commercial terms are confirmed after review.</p>
                </details>
                <details>
                  <summary>Can you help select a grade or tool?</summary>
                  <p>Share the workpiece material, machine, thread or hole details and operating requirements. A suitable option can be discussed after the application is reviewed.</p>
                </details>
                <details>
                  <summary>How can I ask about bulk or export orders?</summary>
                  <p>Select Bulk or Export in the enquiry form. For export requests, include the destination and any delivery or documentation needs.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="section enquiry-section" id="enquiry" aria-labelledby="enquiry-heading">
            <div className="shell enquiry-grid">
              <div>
                <p className="eyebrow">Let&apos;s talk tooling</p>
                <h2 id="enquiry-heading">Request a Cutting Tool Quotation</h2>
                <p>Share the product family, size, material, quantity or drawing reference. Email or phone is enough to start an enquiry.</p>
                <div className="contact-list">
                  <a href={company.phoneHref} data-track-event="click_call" data-button-location="homepage-enquiry">{company.phone}</a>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                  <a href={company.whatsapp} target="_blank" rel="noreferrer" data-track-event="click_whatsapp" data-button-location="homepage-enquiry">WhatsApp us <Arrow /></a>
                </div>
              </div>
              <EnquiryForm />
            </div>
          </section>
        </main>
        <nav className="mobile-contact-bar" aria-label="Quick contact">
          <a href={company.phoneHref} data-track-event="click_call" data-button-location="mobile-contact-bar">Call</a>
          <a href={company.whatsapp} target="_blank" rel="noreferrer" data-track-event="click_whatsapp" data-button-location="mobile-contact-bar">WhatsApp</a>
          <a href="#enquiry">Get Quote</a>
        </nav>
      </SiteShell>
    </>
  );
}
