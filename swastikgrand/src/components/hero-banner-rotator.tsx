"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  ["SWAGIN HSS threading taps in multiple sizes", "/images/swagin-hss-threading-taps.jpg"],
  ["SWAGIN HSS machine tap for production threading", "/images/products/hss-machine-tap.jpg"],
  ["SWAGIN HSS hand tap for precise internal threads", "/images/products/hss-hand-tap.jpg"],
];

export function HeroBannerRotator() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const [alt, image] = banners[activeBanner];

  return <div className="hero-banner-rotator" aria-live="polite"><Image key={image} className="hero-banner-rotator-image" src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 45vw" priority={activeBanner === 0} /></div>;
}