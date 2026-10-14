"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type EnquiryPrefillDetail = {
  enquiryType: string;
  productFamily: string;
};

type EnquiryPrefillLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & EnquiryPrefillDetail & {
  children: ReactNode;
};

export function EnquiryPrefillLink({
  enquiryType,
  productFamily,
  children,
  ...anchorProps
}: EnquiryPrefillLinkProps) {
  function prefillEnquiry() {
    window.dispatchEvent(new CustomEvent<EnquiryPrefillDetail>("swastik:enquiry-prefill", {
      detail: { enquiryType, productFamily },
    }));
  }

  return <a href="#enquiry" {...anchorProps} onClick={prefillEnquiry}>{children}</a>;
}
