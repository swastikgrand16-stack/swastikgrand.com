"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { handTapGallery } from "@/data/hand-tap";

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const activeImage = handTapGallery[activeIndex];

  useEffect(() => {
    if (!dialogOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDialogOpen(false);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % handTapGallery.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index - 1 + handTapGallery.length) % handTapGallery.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dialogOpen]);

  useEffect(() => {
    if (!dialogOpen) triggerRef.current?.focus();
  }, [dialogOpen]);

  return <div className="product-gallery">
    <div className="product-gallery-main">
      <button type="button" className="product-gallery-open" ref={triggerRef} onClick={() => setDialogOpen(true)} aria-label={`Enlarge ${activeImage.label}`}><Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 900px) 100vw, 54vw" priority className="product-gallery-image" /></button>
      <span className="product-gallery-count">0{activeIndex + 1} / 0{handTapGallery.length}</span>
    </div>
    <div className="product-gallery-thumbs" aria-label="Product photographs">
      {handTapGallery.map((image, index) => <button type="button" key={image.src} className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Show ${image.label}`} aria-pressed={index === activeIndex}>
        <Image src={image.src} alt="" fill sizes="88px" />
      </button>)}
    </div>
    <p className="product-gallery-caption">{activeImage.label}</p><p className="product-gallery-note">{handTapGallery.length} original product views, sourced from the approved product page, are available in this build.</p>
    {dialogOpen && <div className="product-image-dialog" role="dialog" aria-modal="true" aria-label={activeImage.alt} onClick={() => setDialogOpen(false)}><div className="product-image-dialog-content" onClick={(event) => event.stopPropagation()}><button type="button" className="product-dialog-close" onClick={() => setDialogOpen(false)} aria-label="Close enlarged image">×</button><Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" className="product-dialog-image" /><button type="button" className="product-dialog-prev" onClick={() => setActiveIndex((index) => (index - 1 + handTapGallery.length) % handTapGallery.length)} aria-label="Previous image">←</button><button type="button" className="product-dialog-next" onClick={() => setActiveIndex((index) => (index + 1) % handTapGallery.length)} aria-label="Next image">→</button></div></div>}
  </div>;
}