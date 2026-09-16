import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry-form";
import { HeroBannerRotator } from "@/components/hero-banner-rotator";
import { categories, company, solutions } from "@/data/site";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <div className="utility"><div className="shell utility-inner"><span>Precision cutting tools. Made in India.</span><span><a href={company.phoneHref}>{company.phone}</a><i /> <a href={`mailto:${company.email}`}>{company.email}</a></span></div></div>
      <header className="site-header"><div className="shell nav"><a className="logo" href="#top" aria-label="Swastik Grand Industries home"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></a><nav><a href="#products">Products</a><a href="/industrial-solutions">Industrial Solutions</a><a href="/custom-taps">Custom Taps</a><a href="/about">About Us</a><a href="/contact">Contact</a></nav><a className="button button-small" href="/get-a-quote">Get a quote <Arrow /></a><a className="menu-button" href="/get-a-quote" aria-label="Go to enquiry">Menu</a></div></header>
      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div>
              <p className="eyebrow">Your partner in industrial precision</p>
              <h1>Better cutting.<br />Longer life.<br /><em>Greater value.</em></h1>
              <p className="hero-text">High-quality cutting tools and custom threading solutions that help solve real production challenges at an affordable price.</p>
              <p className="hero-intro">From everyday workshop jobs to specialised production requirements, Swastik Grand Industries brings together HSS taps, drills and threading tools under the SWAGIN brand.</p>
              <div className="hero-actions">
                <a className="button button-yellow" href="#products">Explore our tools <Arrow /></a>
                <a className="outline-link" href="#custom-taps">Need a custom solution? <Arrow /></a>
                <a className="outline-link" href="https://www.youtube.com/watch?v=BHTs56TPKFg" target="_blank" rel="noreferrer">Watch our factory introduction <Arrow /></a>
              </div>
            </div>
            <div className="hero-support">
              <div className="hero-capabilities">
                <div>
                  <h3>Tools for your application</h3>
                  <p>Hand and machine taps, drills, dies and cutting tools for your material and machining needs.</p>
                </div>
                <div>
                  <h3>Custom taps, made to fit</h3>
                  <p>Discuss special thread sizes, extended lengths and requirements based on your drawing or sample.</p>
                </div>
              </div>
              <div className="hero-guidance">
                <p><strong>Let?s find the right tool for your next job.</strong>Share your material, thread size and quantity with our team.</p>
                <a href="#enquiry" aria-label="Discuss your tooling requirements"><Arrow /></a>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-board">
              <HeroBannerRotator />
              <footer>ENGINEERED FOR THE JOB <strong>Precision starts with the right tool.</strong></footer>
            </div>
          </div>
        </div>
        <div className="shell benefits"><span><b>01</b> Quality you can rely on</span><span><b>02</b> Built for longer service</span><span><b>03</b> Made for your application</span><span><b>04</b> Direct from the manufacturer</span></div>
      </section>
      <section className="section products" id="products"><div className="shell"><div className="section-heading"><div><p className="eyebrow">The SWAGIN range</p><h2>The right tool.<br /><em>For every next step.</em></h2></div><p>Explore cutting and threading tools for workshop use, industrial production and specialised applications.</p></div><div className="category-grid">{categories.map((category) => <a className="category-card" href={category.title === "HSS Hand Tap" ? "/products/hss-hand-taps" : "#enquiry"} key={category.title}><div className="category-image"><Image src={category.image} alt={category.title} fill sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 900px) 45vw, (max-width: 1304px) 30vw, 397px" /><span>{category.number}</span></div><div className="category-copy"><h3>{category.title}</h3><p>{category.description}</p><span className="card-arrow"><Arrow /></span></div></a>)}</div><a className="under-link" href="https://swastikgrand.com/our-products/">View full product catalogue <Arrow /></a></div></section>
      <section className="section solutions" id="solutions"><div className="shell"><div className="section-heading light"><div><p className="eyebrow">Practical problem solving</p><h2>Your challenge.<br /><em>Our starting point.</em></h2></div><p>Tell us about your material, machine and application. We will help you discuss a suitable tooling solution.</p></div><div className="solution-grid">{solutions.map(([title, text, cta], index) => <a className="solution-card" href="#enquiry" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>{cta} <Arrow /></b></a>)}</div></div></section>
      <section className="custom-section" id="custom-taps"><div className="custom-copy"><p className="eyebrow">Custom tap manufacturing</p><h2>Your drawing.<br /><em>Our expertise.</em><br />A tool that fits.</h2><p>When standard taps do not meet your requirements, share your drawing, sample details or thread specification with Swastik Grand Industries.</p><a className="button button-yellow" href="#enquiry">Discuss your custom tap <Arrow /></a></div><div className="custom-details"><p className="detail-title">Built around your requirement</p><div className="spec-list"><span>Special thread sizes & pitches</span><span>Long shank & extended-length requirements</span><span>Material grade & coating options</span><span>Right-hand & left-hand threads</span></div><p className="drawing-note">Have a drawing or sample?<br /><a href={`mailto:${company.email}`}>Email it to {company.email} <Arrow /></a></p></div></section>
      <section className="section about" id="about"><div className="shell about-grid"><div><p className="eyebrow">The people behind the tool</p><h2>Manufacturing tools.<br /><em>Building confidence.</em></h2></div><div><p className="large-copy">Based in Ludhiana, Punjab, Swastik Grand Industries manufactures and supplies industrial cutting and threading tools under the SWAGIN brand. Since 2016, our focus has been to understand the job, provide the right tool and deliver dependable quality at a fair price.</p><a className="under-link" href="/about">About Swastik Grand <Arrow /></a></div></div></section>
      <section className="quality" id="resources"><div className="shell quality-grid"><div><p className="eyebrow">Quality you can evaluate</p><h2>Good tools begin<br />with clear details.</h2></div><div className="quality-proof"><a className="iso-certificate-link" href="https://swastikgrand.com/wp-content/uploads/2026/03/SWASTIK-GRAND-INDUSTRIES-QMS-2-1117x1536.jpg" target="_blank" rel="noreferrer"><Image className="iso-certificate" src="https://swastikgrand.com/wp-content/uploads/2026/03/SWASTIK-GRAND-INDUSTRIES-QMS-2-1117x1536.jpg" alt="Swastik Grand Industries ISO quality management certificate" width={1117} height={1536} /></a><div className="quality-proof-copy"><p>Review our company credentials and discuss the material, dimensions, finish and inspection requirements for your tooling order.</p><div className="resource-links"><a href="#enquiry">Request ISO certificate <Arrow /></a><a href="#enquiry">Request company profile <Arrow /></a><a href="#enquiry">Product catalogue <Arrow /></a></div></div></div></div></section>
      <section className="video-section"><div className="shell video-grid"><div className="video-placeholder"><iframe className="video-embed" src="https://www.youtube.com/embed/BHTs56TPKFg" title="Swastik Grand Industries factory introduction" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div><p className="eyebrow">See the work behind the name</p><h2>A closer look<br /><em>at SWAGIN.</em></h2><p>Meet the people and place behind Swastik Grand Industries in our factory introduction.</p><a className="under-link" href="https://www.youtube.com/watch?v=BHTs56TPKFg" target="_blank" rel="noreferrer">Watch on YouTube <Arrow /></a></div></div></section>
      <section className="order-section"><div className="shell order-grid"><div><p className="eyebrow">For your next requirement</p><h2>Ready when<br /><em>you are.</em></h2></div><div className="order-options"><a href="#enquiry"><span>01</span><h3>Bulk enquiries</h3><p>Size-wise quantities, grade, coating and required date.</p><b>Request bulk quotation <Arrow /></b></a><a href="#enquiry"><span>02</span><h3>Export enquiries</h3><p>Destination country, quantities, documents and terms.</p><b>Discuss export requirements <Arrow /></b></a></div></div></section>
      <section className="enquiry-section" id="enquiry"><div className="shell enquiry-grid"><div><p className="eyebrow">Let&apos;s talk tooling</p><h2>Tell us what you need to cut.<br /><em>We&apos;ll help you find the tool.</em></h2><p>Share your size, material, quantity or drawing with our team.</p><div className="contact-list"><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp us <Arrow /></a></div></div><EnquiryForm /></div></section>
      <footer><div className="shell footer-top"><a className="logo logo-footer" href="#top"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></a><p>High-quality cutting tools and custom threading solutions, made for real production challenges.</p><div className="footer-nav"><a href="#products">Products</a><a href="#solutions">Solutions</a><a href="#custom-taps">Custom taps</a><a href="#about">About</a><a href="#enquiry">Contact</a></div></div><div className="shell footer-bottom"><span>© 2026 Swastik Grand Industries</span><span>{company.address}</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}