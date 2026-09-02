import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import Section from "../../_components/ui/Section";
import { cateringFeatures, cateringFeaturesIntro } from "../_data/cateringConfig";
import { resolveImage } from "../_data/cateringImages";

// Section 3 — What Makes Our Catering Special. Three detailed feature cards,
// distinct from the Hero's four compact trust indicators (CATERING.md §2.6:
// "these are different content groups and must not be merged").
export default function CateringSpecialFeatures() {
  const features = cateringFeatures
    .filter((f) => f.published)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  if (features.length === 0) return null;

  return (
    <Section spacing="compact">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
          {cateringFeaturesIntro.eyebrow}
        </p>
        <h2 className="font-display text-2xl font-medium leading-[1.3] text-ink-900 laptop:text-[32px]">
          <span className="block">{cateringFeaturesIntro.heading.line1}</span>
          <span className="block text-primary-600">{cateringFeaturesIntro.heading.line2}</span>
        </h2>
      </div>

      {/* Image-first: photography is the card's lead element (primary sales
          content), with the number+title+description reading as a tight
          caption block directly beneath it, not a separate text section
          the photo trails behind. Gap intentionally shrinks 32px→24px at
          tablet (gap-8 → tablet:gap-6) — doesn't fit Grid's single-gap
          model, kept literal. */}
      <ul className="mt-8 grid grid-cols-1 gap-8 tablet:grid-cols-3 tablet:gap-6">
        {features.map((feature) => (
          <li key={feature.id} className="flex flex-col items-center gap-3 text-center">
            <ImagePlaceholder
              ratio="16:9"
              alt={feature.imageAlt}
              className="w-full"
              src={resolveImage(feature.image)}
              objectPosition={feature.objectPosition}
              sizes="(min-width: 1024px) 33vw, calc(100vw - 40px)"
            />
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-600 font-body text-sm font-semibold text-cream-300"
              >
                {feature.number}
              </span>
              <h3 className="font-display text-lg font-medium text-primary-600">
                {feature.title}
              </h3>
            </div>
            <p className="max-w-xs font-body text-sm leading-[1.6] text-ink-700">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
