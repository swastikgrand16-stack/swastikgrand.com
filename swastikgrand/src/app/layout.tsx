import type { Metadata } from "next";
import Script from "next/script";
import { Libre_Caslon_Display, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const headingFont = Libre_Caslon_Display({ subsets: ["latin"], weight: "400", variable: "--font-caslon", display: "swap" });

export const metadata: Metadata = { metadataBase: new URL("https://swastikgrand.com"), title: "HSS Cutting Tools & Custom Taps | Swastik Grand Industries", description: "Explore SWAGIN HSS cutting tools and custom threading solutions from Swastik Grand Industries." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  return <html lang="en"><body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}{clarityProjectId ? <Script id="microsoft-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",${JSON.stringify(clarityProjectId)});`}</Script> : null}</body></html>;
}
