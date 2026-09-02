import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import Section from "../../_components/ui/Section";
import Surface from "../../_components/ui/Surface";
import { cateringDelivery } from "../_data/cateringConfig";
import { resolveImage } from "../_data/cateringImages";

// Section 6 — Food Delivery. Informational/service-description only —
// CATERING.md §2.2/§8 explicitly forbid an ordering CTA, checkout, or cart
// here, regardless of the approved reference showing one.
export default function CateringDelivery() {
  if (!cateringDelivery.published) return null;

  return (
    <Section spacing="compact">
      {/* Horizontal from tablet up (not just laptop) — a compact content
          block rather than two stacked full-width blocks on tablet. */}
      <Surface tone="cream" className="flex flex-col gap-4 overflow-hidden p-4 tablet:flex-row tablet:items-center tablet:gap-6 laptop:gap-8 laptop:p-5">
        <ImagePlaceholder
          ratio="16:9"
          alt={cateringDelivery.image.alt}
          className="w-full tablet:w-[220px] tablet:shrink-0 laptop:w-[320px]"
          src={resolveImage(cateringDelivery.image.src)}
          objectPosition={cateringDelivery.image.objectPosition}
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 220px, calc(100vw - 40px)"
        />

        <div className="flex flex-1 flex-col justify-center gap-2">
          <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
            {cateringDelivery.eyebrow}
          </p>
          <h2 className="font-display text-2xl font-medium text-ink-900 laptop:text-[32px]">
            {cateringDelivery.heading}
          </h2>
          <p className="max-w-md font-body text-base leading-[1.6] text-ink-700">
            {cateringDelivery.description}
          </p>
          <p className="font-body text-sm text-ink-500">{cateringDelivery.pricingNote}</p>
        </div>
      </Surface>
    </Section>
  );
}
