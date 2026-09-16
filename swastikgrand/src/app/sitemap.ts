import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://swastikgrand.com";
  return ["/", "/about", "/contact", "/custom-taps", "/get-a-quote", "/industrial-solutions", "/products/hss-hand-taps", "/products/hss-hand-taps/hss-hand-tap"].map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}