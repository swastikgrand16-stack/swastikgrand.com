import type { MetadataRoute } from "next";
import { productMenu } from "@/data/menu";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://swastikgrand.com";
  const categoryPaths = productMenu.map((item) => item.href);
  return ["/", "/about", "/contact", "/custom-taps", "/get-a-quote", "/industrial-solutions", "/products", "/products/hss-hand-taps", "/products/hss-hand-taps/hss-hand-tap", ...categoryPaths].filter((path, index, paths) => paths.indexOf(path) === index).map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}