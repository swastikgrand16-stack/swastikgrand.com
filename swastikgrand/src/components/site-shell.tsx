import Link from "next/link";
import { company } from "@/data/site";
import { productMenu } from "@/data/menu";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { MobileNav } from "@/components/mobile-nav";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader() {
  return <>
    <div className="utility"><div className="shell utility-inner"><span>Precision cutting tools. Made in India.</span><span><a href={company.phoneHref} data-track-event="click_call" data-button-location="utility-bar">{company.phone}</a><i /> <a href={`mailto:${company.email}`}>{company.email}</a></span></div></div>
    <header className="site-header"><div className="shell nav"><Link className="logo" href="/" aria-label="Swastik Grand Industries home"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></Link><nav aria-label="Primary navigation"><details className="products-nav"><summary>Products</summary><div className="products-menu"><Link className="products-menu-all" href="/products">View all products <Arrow /></Link>{productMenu.map((category) => <div className="products-menu-group" key={category.href}><Link href={category.href}>{category.label}</Link>{category.children?.filter((product) => product.href.startsWith("/products/")).map((product) => <Link className="products-menu-child" href={product.href} key={product.href} data-track-event="select_product" data-product-family={category.label} data-button-location="header-product-menu">{product.label}</Link>)}</div>)}</div></details><Link href="/custom-taps" data-track-event="click_custom_enquiry" data-button-location="header-navigation">Custom Taps</Link><Link href="/about">About</Link><Link href="/#quality">Quality</Link><Link href="/contact">Contact</Link></nav><MobileNav /><Link className="button button-small" href="/get-a-quote">Get a Quote <Arrow /></Link></div></header>
  </>;
}

export function SiteFooter() {
  return <footer><div className="shell footer-top"><Link className="logo logo-footer" href="/"><span className="logo-mark">SG</span><strong className="logo-name">Swastik Grand Industries</strong></Link><p>High-quality cutting tools and custom threading solutions, made for real production challenges.<br /><a href={company.phoneHref} data-track-event="click_call" data-button-location="footer">{company.phone}</a><br /><a href={`mailto:${company.email}`}>{company.email}</a></p><div className="footer-nav"><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/custom-taps">Custom taps</Link><Link href="/get-a-quote">Get a Quote</Link></div></div><div className="shell footer-bottom"><span>© 2026 Swastik Grand Industries</span><span>{company.address}</span><a href="#top">Back to top ↑</a></div></footer>;
}

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><AnalyticsTracker /><SiteHeader />{children}<SiteFooter /></>;
}