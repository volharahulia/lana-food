import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import { cateringDelivery } from "../_data/cateringConfig";
import { resolveImage } from "../_data/cateringImages";

// Section 6 — Food Delivery. Informational/service-description only —
// CATERING.md §2.2/§8 explicitly forbid an ordering CTA, checkout, or cart
// here, regardless of the approved reference showing one.
export default function CateringDelivery() {
  if (!cateringDelivery.published) return null;

  return (
    <section className="container-page py-10 laptop:py-16">
      <div className="flex flex-col gap-5 overflow-hidden rounded-lg border border-border-hairline bg-gradient-to-br from-cream-500 to-cream-300 p-4 laptop:flex-row laptop:gap-8 laptop:p-5">
        <ImagePlaceholder
          ratio="4:5"
          alt={cateringDelivery.image.alt}
          className="w-full laptop:w-[280px] laptop:shrink-0 laptop:self-center"
          src={resolveImage(cateringDelivery.image.src)}
          objectPosition={cateringDelivery.image.objectPosition}
          sizes="(min-width: 1024px) 280px, calc(100vw - 40px)"
        />

        <div className="flex flex-1 flex-col justify-center gap-3">
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
      </div>
    </section>
  );
}
