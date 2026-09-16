import Link from "next/link";
import { company } from "@/data/site";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader() {
  return <>
    <div className="utility"><div className="shell utility-inner"><span>Precision cutting tools. Made in India.</span><span><a href={company.phoneHref}>{company.phone}</a><i /> <a href={`mailto:${company.email}`}>{company.email}</a></span></div></div>
    <header className="site-header"><div className="shell nav"><Link className="logo" href="/" aria-label="Swastik Grand Industries home"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></Link><nav><Link href="/products/hss-hand-taps">Products</Link><Link href="/industrial-solutions">Industrial Solutions</Link><Link href="/custom-taps">Custom Taps</Link><Link href="/about">About Us</Link><Link href="/contact">Contact</Link></nav><Link className="button button-small" href="/get-a-quote">Get a quote <Arrow /></Link></div></header>
  </>;
}

export function SiteFooter() {
  return <footer><div className="shell footer-top"><Link className="logo logo-footer" href="/"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></Link><p>High-quality cutting tools and custom threading solutions, made for real production challenges.</p><div className="footer-nav"><Link href="/#products">Products</Link><Link href="/industrial-solutions">Solutions</Link><Link href="/custom-taps">Custom taps</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div><div className="shell footer-bottom"><span>© 2026 Swastik Grand Industries</span><span>{company.address}</span><a href="#top">Back to top ↑</a></div></footer>;
}

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}