import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "About Swastik Grand Industries | Swastik Grand Industries",
  description: "Learn about Swastik Grand Industries, a Ludhiana-based manufacturer of nut taps, machine taps, hand taps and precision threading tools.",
};

const productLinks = [
  ["Nut Taps", "https://swastikgrand.com/product-category/nut-taps/"],
  ["Hand Taps", "https://swastikgrand.com/product-category/hss-threading-taps/hand-taps/"],
  ["Machine Taps", "https://swastikgrand.com/product-category/hss-threading-taps/machine-taps/"],
  ["Helicoil Taps", "https://swastikgrand.com/product-category/heli-coil-taps/"],
  ["Pipe Thread Taps", "https://swastikgrand.com/product-category/hss-threading-taps/pipe-threading-taps/"],
  ["Threading Roll Die", "https://swastikgrand.com/product-category/threading-roll-die/"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="utility"><div className="shell utility-inner"><span>Precision cutting tools. Made in India.</span><span><a href={company.phoneHref}>{company.phone}</a><i /> <a href={`mailto:${company.email}`}>{company.email}</a></span></div></div>
      <header className="site-header"><div className="shell nav"><Link className="logo" href="/" aria-label="Swastik Grand Industries home"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></Link><nav><Link href="/#products">Products</Link><Link href="/#solutions">Industrial Solutions</Link><Link href="/about">About Us</Link><Link href="/#enquiry">Contact</Link></nav><Link className="button button-small" href="/#enquiry">Get a quote <Arrow /></Link></div></header>

      <section className="about-hero"><div className="shell about-hero-grid"><div><p className="eyebrow">About us</p><h1>Built on precision.<br /><em>Trusted across India.</em></h1></div><p className="about-hero-lede">Swastik Grand Industries is a Ludhiana-based manufacturer of dependable threading tools for workshops, production floors and industrial applications.</p></div></section>

      <section className="about-visual"><div className="shell about-visual-grid"><div className="about-visual-main"><Image src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1600&q=85" alt="Industrial workshop and manufacturing environment" fill sizes="(max-width: 900px) 100vw, 62vw" /></div><div className="about-visual-side"><div><Image src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85" alt="Craftsperson working with industrial equipment" fill sizes="(max-width: 900px) 100vw, 30vw" /></div><p><span>Made for the work</span> A closer look at the industrial thinking behind every tool.</p></div></div></section>

      <section className="about-story section"><div className="shell about-story-grid"><div><p className="eyebrow">Swastik Grand Industries</p><h2>Tools made for<br /><em>the work ahead.</em></h2></div><div className="about-story-copy"><p>We at Swastik Grand Industries are a prominent manufacturer of nut taps, machine taps, hand taps and related precision threading tools. Founded as a proprietorship in 2016, we have built a sizable and highly functional infrastructural unit in Ludhiana, Punjab, India.</p><p>Our products are made available at fair prices and delivered on schedule. Under the direction of <strong>Mr. Gurpinder Dani, Proprietor</strong>, we have built a sizable clientele across the country by staying close to the practical needs of the people who use our tools.</p></div></div></section>

      <section className="about-facts"><div className="shell about-facts-grid"><div><span>01</span><strong>Established</strong><p>Founded as a proprietorship in 2016.</p></div><div><span>02</span><strong>Based in Ludhiana</strong><p>Serving customers from Punjab, India.</p></div><div><span>03</span><strong>Focused on tooling</strong><p>Nut, machine, hand and specialised taps.</p></div><div><span>04</span><strong>Led by experience</strong><p>Mr. Gurpinder Dani, Proprietor.</p></div></div></section>

      <section className="about-products section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Our products</p><h2>Threading tools for<br /><em>real production.</em></h2></div><p>Explore the SWAGIN range, or tell us what your application requires and our team will help you identify a suitable tool.</p></div><div className="about-product-links">{productLinks.map(([title, href]) => <a href={href} key={title} target="_blank" rel="noreferrer"><span>{title}</span><Arrow /></a>)}</div><Link className="button button-yellow about-cta" href="/#enquiry">Discuss your requirement <Arrow /></Link></div></section>

      <section className="about-contact"><div className="shell about-contact-grid"><div><p className="eyebrow">Visit or contact us</p><h2>Let&apos;s talk<br /><em>tooling.</em></h2></div><div className="about-contact-details"><p><strong>Mailing address</strong><br />{company.address}</p><p><strong>Email</strong><br /><a href={`mailto:${company.email}`}>{company.email}</a></p><p><strong>Contact</strong><br /><a href={company.phoneHref}>{company.phone}</a></p><a className="under-link" href={company.whatsapp} target="_blank" rel="noreferrer">Message us on WhatsApp <Arrow /></a></div></div></section>

      <footer><div className="shell footer-top"><Link className="logo logo-footer" href="/"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></Link><p>High-quality cutting tools and custom threading solutions, made for real production challenges.</p><div className="footer-nav"><Link href="/#products">Products</Link><Link href="/#solutions">Solutions</Link><Link href="/about">About</Link><Link href="/#enquiry">Contact</Link></div></div><div className="shell footer-bottom"><span>© 2026 Swastik Grand Industries</span><span>{company.address}</span><Link href="/about">Back to top ↑</Link></div></footer>
    </main>
  );
}