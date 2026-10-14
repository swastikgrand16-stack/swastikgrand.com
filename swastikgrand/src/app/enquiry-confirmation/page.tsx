import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Enquiry Received | Swastik Grand Industries",
  robots: { index: false, follow: false },
};

type ConfirmationPageProps = {
  searchParams: Promise<{ product?: string; reference?: string }>;
};

export default async function EnquiryConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const { product, reference } = await searchParams;
  const enquiryReference = reference && /^SGI-\d{6}-[A-F0-9]{8}$/.test(reference) ? reference : "Not available";
  const productName = product?.slice(0, 160) || "your enquiry";

  return (
    <SiteShell>
      <main id="top" className="confirmation-page">
        <section className="section">
          <div className="shell confirmation-card">
            <p className="eyebrow">Enquiry received</p>
            <h1>Thank you.<br /><em>We&apos;ll be in touch.</em></h1>
            <p>Your enquiry about {productName} was received and sent to our sales team. Swastik Grand Industries will contact you using the details provided.</p>
            <div className="confirmation-reference">
              <span>Your reference number</span>
              <strong>{enquiryReference}</strong>
            </div>
            <p className="confirmation-note">Please keep this reference for any follow-up about your enquiry.</p>
            <div className="confirmation-actions">
              <Link className="button button-yellow" href="/products">Explore products <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/">Return home <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
