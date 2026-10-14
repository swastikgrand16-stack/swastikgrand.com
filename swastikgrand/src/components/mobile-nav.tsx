"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { productMenu } from "@/data/menu";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-nav">
      <button
        ref={toggleRef}
        className="mobile-nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        Menu <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <nav className="mobile-nav-panel" id="mobile-navigation-panel" aria-label="Mobile navigation">
          <Link href="/products" onClick={closeMenu}>All products</Link>
          {productMenu.map((category) => (
            <div className="mobile-nav-group" key={category.href}>
              <Link href={category.href} onClick={closeMenu}>{category.label}</Link>
              {category.children?.filter((product) => product.href.startsWith("/products/")).map((product) => (
                <Link
                  className="mobile-nav-child"
                  href={product.href}
                  key={product.href}
                  data-track-event="select_product"
                  data-product-family={category.label}
                  data-button-location="mobile-product-menu"
                  onClick={closeMenu}
                >
                  {product.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/custom-taps" data-track-event="click_custom_enquiry" data-button-location="mobile-menu" onClick={closeMenu}>Custom Taps</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/#quality" onClick={closeMenu}>Quality</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      )}
    </div>
  );
}
