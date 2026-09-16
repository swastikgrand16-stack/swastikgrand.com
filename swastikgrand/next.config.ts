import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	poweredByHeader: false,
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