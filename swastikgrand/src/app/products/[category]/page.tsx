import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { productMenu } from "@/data/menu";

export function generateStaticParams() {
  return productMenu.filter((category) => category.href !== "/products/hss-hand-taps").map((category) => ({ category: category.href.split("/").pop() }));
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = productMenu.find((item) => item.href.endsWith(`/${slug}`));
  if (!category) notFound();

  return <SiteShell><main className="product-family-page"><section className="inner-hero"><div className="shell inner-hero-grid"><div><p className="eyebrow">SWAGIN product category</p><h1>{category.label}</h1></div><p>{category.description} Review the subcategories below and share your application for a confirmed product recommendation.</p></div></section><div className="shell breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><strong>{category.label}</strong></div><section className="section family-content"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Subcategories</p><h2>Find the right<br /><em>tool route.</em></h2></div><p>These links start a product conversation. Confirm dimensions, material, grade, coating, availability and commercial terms in the quotation.</p></div><div className="catalog-subcategory-list catalog-subcategory-list-large">{category.children?.map((item) => <Link href={item.href} key={item.label}><span>{item.label}</span><b aria-hidden="true">↗</b></Link>)}</div></div></section><section className="product-category-note"><div className="shell category-note-grid"><div><p className="eyebrow">Need help choosing?</p><h2>Share the<br /><em>application.</em></h2></div><div><p>Include the material, dimensions, quantity and required date. A drawing or sample reference helps the team review the correct tool family.</p><Link className="under-link" href="/get-a-quote">Request a quote <span aria-hidden="true">↗</span></Link></div></div></section></main></SiteShell>;
}