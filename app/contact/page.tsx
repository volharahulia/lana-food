import type { Metadata } from "next";
import ContactIntro from "./_components/ContactIntro";
import ContactMain from "./_components/ContactMain";
import ContactFaq from "./_components/ContactFaq";
import ContactClosing from "./_components/ContactClosing";
import { contactFaq } from "./_data/contactConfig";

export const metadata: Metadata = {
  title: "Contact Lana Food | Catering & Homemade Food Bay Area",
  description:
    "Contact Lana Food for homemade Eastern European food and catering in Mountain View and the San Francisco Bay Area. Call, message on WhatsApp, or find us on Google Maps.",
};

// FAQPage schema generated from the same contactFaq data the visible
// accordion renders from — never a separate hardcoded copy (CLAUDE.md).
// Omitted entirely while contactFaq is empty, rather than emitting empty/
// fabricated FAQ schema.
const faqJsonLd =
  contactFaq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: contactFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

export default function ContactPage() {
  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ContactIntro />
      <ContactMain />
      <ContactFaq />
      <ContactClosing />
    </>
  );
}
