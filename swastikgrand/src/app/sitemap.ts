import type { MetadataRoute } from "next";
import { productMenu } from "@/data/menu";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://swastikgrand.com";
  const categoryPaths = productMenu.flatMap((item) => [item.href, ...(item.children || []).map((child) => child.href)]);
  return ["/", "/about", "/contact", "/custom-taps", "/get-a-quote", "/industrial-solutions", "/products", "/products/hss-hand-taps", "/products/hss-hand-taps/hss-hand-tap", "/products/hss-hand-taps/hss-hand-tap-set", ...categoryPaths].filter((path) => path.startsWith("/products") || !path.includes("?" )).filter((path, index, paths) => paths.indexOf(path) === index).map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}