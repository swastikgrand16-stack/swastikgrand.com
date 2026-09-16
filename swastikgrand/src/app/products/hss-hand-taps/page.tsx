import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { categories } from "@/data/site";

export const metadata = {
  title: "HSS Hand Taps | SWAGIN Threading Tools",
  description: "Explore SWAGIN HSS hand taps for suitable workshop, tool-room and component-threading requirements.",
};

export default function HssHandTapsPage() {
  const handTaps = categories.filter((category) => category.title.toLowerCase().includes("hand tap"));
  return <SiteShell><main id="top" className="product-category-page">
    <section className="inner-hero"><div className="shell inner-hero-grid"><div><p className="eyebrow">SWAGIN product family</p><h1>HSS hand taps.<br /><em>Made for control.</em></h1></div><p>Browse hand-threading tools for suitable workshop, tool-room and component requirements. Confirm size, pitch, material and quantity with the manufacturer.</p></div></section>
    <div className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#products">Products</Link><span>/</span><strong>HSS Hand Taps</strong></div>
    <section className="section product-category-intro"><div className="shell category-intro-grid"><div><p className="eyebrow">HSS threading taps</p><h2>Choose the right hand tap<br /><em>for the next operation.</em></h2></div><div><p>SWAGIN HSS hand taps support controlled internal threading in prepared holes. Select an individual hand tap or review the three-piece set, then share the exact thread requirement for a quotation.</p><Link className="button button-yellow" href="/products/hss-hand-taps/hss-hand-tap">View HSS threading hand tap <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="section category-products"><div className="shell"><div className="product-grid">{handTaps.map((category) => <Link className="product-card" href={category.title === "HSS Hand Tap" ? "/products/hss-hand-taps/hss-hand-tap" : "/get-a-quote"} key={category.title}><div className="product-card-image"><Image src={category.image} alt={category.title} fill sizes="(max-width: 560px) 100vw, 50vw" /></div><div className="product-card-copy"><p className="eyebrow">{category.number}</p><h3>{category.title}</h3><p>{category.description} Discuss the exact size, pitch and quantity with our team.</p><span className="under-link">Explore product <span aria-hidden="true">↗</span></span></div></Link>)}</div></div></section>
    <section className="product-category-note"><div className="shell category-note-grid"><div><p className="eyebrow">Need help choosing?</p><h2>Start with the<br /><em>thread details.</em></h2></div><div><p>Tell us the thread standard, pitch or TPI, workpiece material, hole type and quantity. If you are unsure, send a drawing or ask for a recommendation.</p><Link className="under-link" href="/get-a-quote">Request a product quote <span aria-hidden="true">↗</span></Link></div></div></section>
  </main></SiteShell>;
}