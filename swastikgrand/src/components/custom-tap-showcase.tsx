"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  ["Machine tap applications", "Precision threading for repeat production", "/images/products/hss-machine-tap.jpg"],
  ["Helicoil tap applications", "Reliable preparation for thread repair inserts", "/images/products/hss-heli-coil-tap.jpg"],
  ["Thread-forming applications", "Forming tools for consistent internal threads", "/images/products/hss-thread-forming-roll-tap.jpg"],
];

export function CustomTapShowcase() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const [title, caption, image] = banners[activeBanner];

  return <section className="custom-showcase"><div className="shell custom-showcase-grid"><div className="custom-showcase-image"><Image key={image} src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 58vw" priority={activeBanner === 0} /><div className="custom-showcase-label"><span>SWAGIN / PRODUCT REFERENCE</span><strong>{caption}</strong></div></div><div className="custom-showcase-copy"><p className="eyebrow">Start with what exists</p><h2>Standard tools.<br /><em>Custom thinking.</em></h2><p>See the existing SWAGIN range, then tell us where your application needs something different. Special sizes, extended lengths and drawing-based tools begin with a clear conversation.</p><div className="custom-showcase-controls" aria-label="Choose product image">{banners.map(([bannerTitle], index) => <button className={index === activeBanner ? "active" : ""} type="button" aria-label={`Show ${bannerTitle}`} aria-pressed={index === activeBanner} onClick={() => setActiveBanner(index)} key={bannerTitle}><span>0{index + 1}</span>{bannerTitle}</button>)}</div></div></div></section>;
}