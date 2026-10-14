"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type HomeProduct = {
  label: string;
  href: string;
  category: string;
  image: string;
};

type HomeProductFamilyCardProps = {
  title: string;
  description: string;
  image: string;
  categoryHref: string;
  products: HomeProduct[];
};

export function HomeProductFamilyCard({
  title,
  description,
  image,
  categoryHref,
  products,
}: HomeProductFamilyCardProps) {
  const [pointerPreview, setPointerPreview] = useState<{ label: string; image: string } | null>(null);
  const [focusedPreview, setFocusedPreview] = useState<{ label: string; image: string } | null>(null);
  const preview = pointerPreview ?? focusedPreview;
  const imageSrc = preview?.image ?? image;

  return (
    <article className="home-product-family">
      <Link
        className="home-product-image"
        href={categoryHref}
        aria-label={`Explore ${title}`}
        data-track-event="select_product"
        data-product-family={title}
        data-button-location="homepage-family-card"
      >
        <Image
          src={imageSrc}
          alt={preview ? preview.label : title}
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1100px) 45vw, 285px"
        />
      </Link>
      <div className="home-product-copy">
        <h3>
          <Link
            href={categoryHref}
            data-track-event="select_product"
            data-product-family={title}
            data-button-location="homepage-family-heading"
          >
            {title}
          </Link>
        </h3>
        <p>{description}</p>
        <ul>
          {products.map((product) => (
            <li key={product.href}>
              <Link
                href={product.href}
                data-track-event="select_product"
                data-product-family={product.category}
                data-button-location="homepage-product-family"
                onPointerEnter={() => setPointerPreview({ label: product.label, image: product.image })}
                onPointerLeave={() => setPointerPreview(null)}
                onFocus={() => setFocusedPreview({ label: product.label, image: product.image })}
                onBlur={() => setFocusedPreview(null)}
              >
                {product.label} <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
