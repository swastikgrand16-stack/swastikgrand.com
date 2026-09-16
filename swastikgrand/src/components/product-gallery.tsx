"use client";

import Image from "next/image";
import { useState } from "react";
import { handTapGallery } from "@/data/hand-tap";

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = handTapGallery[activeIndex];

  return <div className="product-gallery">
    <div className="product-gallery-main">
      <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 900px) 100vw, 54vw" priority className="product-gallery-image" />
      <span className="product-gallery-count">0{activeIndex + 1} / 0{handTapGallery.length}</span>
    </div>
    <div className="product-gallery-thumbs" aria-label="Product photographs">
      {handTapGallery.map((image, index) => <button type="button" key={image.src} className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Show ${image.label}`} aria-pressed={index === activeIndex}>
        <Image src={image.src} alt="" fill sizes="88px" />
      </button>)}
    </div>
    <p className="product-gallery-note">{handTapGallery.length} supplied product views are available in this build. Additional original gallery files can be added without changing the layout.</p>
  </div>;
}