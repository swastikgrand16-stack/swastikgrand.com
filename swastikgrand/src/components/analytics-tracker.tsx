"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const target = event.target.closest<HTMLElement>("[data-track-event]");
      const eventName = target?.dataset.trackEvent;
      if (!target || !eventName) return;

      const parameters: Record<string, string> = {
        page_path: window.location.pathname,
      };
      if (target.dataset.productFamily) parameters.product_family = target.dataset.productFamily;
      if (target.dataset.buttonLocation) parameters.button_location = target.dataset.buttonLocation;

      trackEvent(eventName, parameters);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
