"use client";

import type { ReactNode } from "react";
import { company } from "@/data/site";

type ContactEvent = "click_call" | "click_whatsapp";
type ButtonLocation = "hero" | "enquiry" | "sticky_contact_bar";
type HssHandTapEvent = ContactEvent | "generate_lead" | "download_drawing";

export function trackHssHandTapEvent(eventName: HssHandTapEvent, buttonLocation?: ButtonLocation) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    product_name: "HSS Hand Tap",
    page_path: window.location.pathname,
    ...(buttonLocation ? { button_location: buttonLocation } : {}),
  });
}

export function HssHandTapContactLink({
  contact,
  buttonLocation,
  className,
  children,
}: {
  contact: "call" | "whatsapp";
  buttonLocation: ButtonLocation;
  className?: string;
  children: ReactNode;
}) {
  const isWhatsApp = contact === "whatsapp";
  return (
    <a
      className={className}
      href={isWhatsApp ? company.whatsapp : company.phoneHref}
      target={isWhatsApp ? "_blank" : undefined}
      rel={isWhatsApp ? "noreferrer" : undefined}
      onClick={() => trackHssHandTapEvent(isWhatsApp ? "click_whatsapp" : "click_call", buttonLocation)}
    >
      {children}
    </a>
  );
}
