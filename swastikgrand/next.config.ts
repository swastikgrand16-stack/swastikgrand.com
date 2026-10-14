import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	poweredByHeader: false,
	async redirects() {
		return [
			{ source: "/products/hss-hand-taps/hss-hand-tap", destination: "/products/hss-threading-taps/hss-hand-taps", permanent: true },
			{ source: "/hss-threading-taps/hand-taps/hss-hand-tap-manufacturers", destination: "/products/hss-threading-taps/hss-hand-taps", permanent: true },
		];
	},
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "swastikgrand.com", pathname: "/wp-content/uploads/**" },
			{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
		],
	},
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);