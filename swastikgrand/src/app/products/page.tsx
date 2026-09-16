import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { productMenu } from "@/data/menu";

export const metadata = {
  title: "Industrial Cutting Tools | SWAGIN Product Categories",
  description: "Browse SWAGIN HSS threading taps, dies, rolls, drills, reamers, cutters and tool bits from Swastik Grand Industries.",
};

export default function ProductsPage() {
  return <SiteShell><main id="top" className="products-catalog-page">
    <section className="inner-hero"><div className="shell inner-hero-grid"><div><p className="eyebrow">SWAGIN product catalogue</p><h1>Tools for the<br /><em>next operation.</em></h1></div><p>Explore product categories and subcategories for threading, hole finishing, milling and cutting requirements. Share your specification when a suitable route needs technical review.</p></div></section>
    <div className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><strong aria-current="page">Products</strong></div>
    <section className="section products-catalog-intro"><div className="shell category-intro-grid"><div><p className="eyebrow">Product categories</p><h2>Start with the<br /><em>tool family.</em></h2></div><p>Choose a category to narrow the conversation. Product availability, dimensions, grade, coating and commercial terms are confirmed for the selected configuration.</p></div></section>
    <section className="section catalog-list"><div className="shell"><div className="catalog-category-grid">{productMenu.map((category, index) => <article className="catalog-category" key={category.label}><div className="catalog-category-heading"><span>0{index + 1}</span><div><h2>{category.label}</h2><p>{category.description}</p></div></div><div className="catalog-subcategory-list">{category.children?.map((item) => <Link href={item.href} key={item.label}><span>{item.label}</span><b aria-hidden="true">↗</b></Link>)}</div><Link className="under-link" href={category.href}>View category route <span aria-hidden="true">↗</span></Link></article>)}</div></div></section>
    <section className="product-category-note"><div className="shell category-note-grid"><div><p className="eyebrow">Need a different tool?</p><h2>Tell us about<br /><em>the application.</em></h2></div><div><p>Include the material, thread, size, quantity and required date. We can discuss the suitable product family before preparing a quotation.</p><Link className="under-link" href="/get-a-quote">Request a quote <span aria-hidden="true">↗</span></Link></div></div></section>
  </main></SiteShell>;
}