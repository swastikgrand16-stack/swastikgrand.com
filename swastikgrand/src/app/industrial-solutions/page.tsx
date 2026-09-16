import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Industrial Solutions | Swastik Grand Industries", description: "Practical threading and cutting tool solutions for production, repair and specialised industrial applications." };

const solutions = [
  ["Thread quality", "Review thread form, tolerance, chip control and hole requirements to find a tap that produces accurate, repeatable results."],
  ["Tool life", "Match grade, geometry and coating to the application so your tools keep working through demanding production cycles."],
  ["Production value", "Review quantities, tool selection and repeat requirements to create a dependable supply plan at a fair price."],
  ["Special applications", "Discuss material, machine, access and drawing-based requirements when a standard tool does not fit the job."],
];

const solutionProducts = [
  ["Machine threading", "HSS machine taps for precise, repeatable internal threads.", "/images/products/hss-machine-tap.jpg"],
  ["Nut production", "Nut taps built for consistent production threading.", "/images/products/hss-nut-tap.jpg"],
  ["Specialised applications", "SPPT, Helicoil and forming taps for specific jobs.", "/images/products/hss-sppt-tap.jpg"],
];

const reasons = [
  ["Highly qualified staff", "Practical product knowledge to help you discuss the right tool for the job."],
  ["Honest, flat-rate pricing", "Clear value for standard, bulk, export and custom tooling requirements."],
  ["Wide service area", "Serving customers across India with dependable communication and delivery."],
  ["On-demand support", "When a production issue needs attention, our team is ready to help you move forward."],
  ["HSS manufacturing expertise", "Focused capability across hand taps, machine taps, nut taps and threading tools."],
  ["Satisfaction as standard", "Quality, consistency and long service life remain central to every order."],
];

export default function IndustrialSolutionsPage() {
  return <SiteShell><main id="top" className="inner-page solutions-page"><section className="inner-hero"><div className="shell inner-hero-grid"><div><p className="eyebrow">Industrial solutions</p><h1>Your challenge.<br /><em>Our starting point.</em></h1></div><p>From hand threading to high-volume production, Swastik Grand Industries helps you choose practical HSS tools for the material, machine and application.</p></div></section><section className="section solutions-intro"><div className="shell solutions-intro-grid"><div><p className="eyebrow">Practical problem solving</p><h2>Tools selected<br /><em>for the job.</em></h2></div><p className="solutions-lede">We manufacture and supply nut taps, machine taps, hand taps, thread rolls, dies, cutters and related HSS tools. Our approach is simple: understand the job, recommend the right tool and deliver it on schedule.</p></div></section><section className="solution-list"><div className="shell"><div className="solution-list-grid">{solutions.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link href="/get-a-quote">Discuss this requirement <span aria-hidden="true">↗</span></Link></article>)}</div></div></section><section className="solution-gallery section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Tools for the application</p><h2>See the range<br /><em>at work.</em></h2></div><p>Choose a starting point from our HSS threading range, then tell us about your material, machine and production requirement.</p></div><div className="solution-gallery-grid">{solutionProducts.map(([title, text, image]) => <article key={title}><div className="solution-gallery-image"><Image src={image} alt={title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section><section className="why-us"><div className="shell"><div className="why-us-heading"><div><p className="eyebrow">Why choose us?</p><h2>Reliable tools.<br /><em>Practical support.</em></h2></div><p>Swastik Grand Industries combines product knowledge, fair pricing and dependable service for customers who need their tooling to perform.</p></div><div className="why-us-grid">{reasons.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="solution-cta"><div className="shell solution-cta-grid"><div><p className="eyebrow">Need a tooling recommendation?</p><h2>Bring us the<br /><em>next problem.</em></h2></div><div><p>Send your thread size, material, quantity or drawing. We&apos;ll help you discuss a suitable standard or custom solution.</p><Link className="button button-yellow" href="/get-a-quote">Start an enquiry <span aria-hidden="true">↗</span></Link></div></div></section></main></SiteShell>;
}