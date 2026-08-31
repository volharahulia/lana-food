import Button from "../../_components/ui/Button";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import { business } from "../../_data/business";
import { cateringFinalCta } from "../_data/cateringConfig";
import { resolveImage } from "../_data/cateringImages";

// Section 7 — Final Planning CTA. Reuses the existing configured contact
// data for the WhatsApp destination (CATERING.md §14: "do not duplicate
// contact numbers in Catering components") — the secondary action only
// renders when business.whatsapp is actually configured.
export default function CateringFinalCta() {
  const whatsappHref = business.whatsapp ? `https://wa.me/${business.whatsapp}` : null;

  return (
    <section className="container-page py-10 laptop:py-12">
      <div className="flex flex-col gap-5 overflow-hidden rounded-lg border border-border-hairline bg-gradient-to-br from-cream-500 to-cream-300 p-4 laptop:flex-row laptop:gap-8 laptop:p-5">
        <ImagePlaceholder
          ratio="4:5"
          alt={cateringFinalCta.image.alt}
          className="w-full laptop:w-[280px] laptop:shrink-0 laptop:self-center"
          src={resolveImage(cateringFinalCta.image.src)}
          objectPosition={cateringFinalCta.image.objectPosition}
          sizes="(min-width: 1024px) 280px, calc(100vw - 40px)"
        />

        <div className="flex flex-1 flex-col justify-center gap-3">
          <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
            {cateringFinalCta.eyebrow}
          </p>
          <h2 className="font-display text-2xl font-medium text-ink-900 laptop:text-[32px]">
            <span className="block">{cateringFinalCta.heading.line1}</span>
            <span className="block text-primary-600">{cateringFinalCta.heading.line2}</span>
          </h2>
          <p className="max-w-md font-body text-base leading-[1.6] text-ink-700">
            {cateringFinalCta.supportingText}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button href={cateringFinalCta.primaryCta.href} size="lg">
              {cateringFinalCta.primaryCta.label}
            </Button>
            {whatsappHref && (
              <Button href={whatsappHref} variant="secondary" size="lg">
                {cateringFinalCta.secondaryCtaLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
