import CtaBlock from "../../_components/ui/CtaBlock";
import { business } from "../../_data/business";
import { cateringFinalCta } from "../_data/cateringConfig";

// Section 7 — Final Planning CTA. Thin adapter over the shared CtaBlock
// (app/_components/ui/CtaBlock.tsx) — the same "split" variant used by
// About's AboutCTA, with a text eyebrow in the decorative slot instead of
// About's HeartDivider icon. This is a contact/conversion CTA, not an
// editorial image card, so no image is passed. Reuses the existing
// configured contact data for the WhatsApp destination (CATERING.md §14:
// "do not duplicate contact numbers in Catering components") — the
// secondary action only renders when business.whatsapp is actually
// configured.
export default function CateringFinalCta() {
  const whatsappHref = business.whatsapp ? `https://wa.me/${business.whatsapp}` : null;

  return (
    <CtaBlock
      layout="split"
      decorative={
        <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-cream-300/90">
          {cateringFinalCta.eyebrow}
        </p>
      }
      heading={cateringFinalCta.heading}
      supportingText={cateringFinalCta.supportingText}
      primaryCta={{ ...cateringFinalCta.primaryCta, variant: "inverse" }}
      secondaryCta={
        whatsappHref
          ? { label: cateringFinalCta.secondaryCtaLabel, href: whatsappHref, variant: "ghost" }
          : undefined
      }
    />
  );
}
