import type { Metadata } from "next";
import { Libre_Caslon_Display, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const headingFont = Libre_Caslon_Display({ subsets: ["latin"], weight: "400", variable: "--font-caslon", display: "swap" });

export const metadata: Metadata = { metadataBase: new URL("https://swastikgrand.com"), title: "HSS Cutting Tools & Custom Taps | Swastik Grand Industries", description: "Explore SWAGIN HSS cutting tools and custom threading solutions from Swastik Grand Industries." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body></html>;
}
