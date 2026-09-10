import Image from "next/image";
import Section from "../../_components/ui/Section";
import Surface from "../../_components/ui/Surface";
import Grid from "../../_components/ui/Grid";
import {
  cateringIncludesLabel,
  cateringProcessIntro,
  cateringProcessSteps,
  cateringServiceStatement,
} from "../_data/cateringConfig";

// Section 5 — Our Process / On-Site Catering Service. The critical section:
// the $500 statement and all five steps are entirely data-driven (CATERING.md
// §7) — price/currency are formatted here, never string-concatenated in data,
// so either can change independently without touching this component.
export default function CateringProcessService() {
  const steps = cateringProcessSteps
    .filter((s) => s.published)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cateringServiceStatement.currency,
    maximumFractionDigits: 0,
  }).format(cateringServiceStatement.price);

  return (
    // "bordered" (hairline border, no fill) instead of "cream" (gradient
    // fill) — the price/process pitch still reads as one grouped unit, but
    // lighter, letting the enlarged icons carry the visual weight instead
    // of a heavy card background.
    <Section spacing="compact">
      <Surface tone="bordered" className="p-4 laptop:p-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
            {cateringProcessIntro.eyebrow}
          </p>
          <h2 className="font-display text-2xl font-medium text-ink-900 laptop:text-[32px]">
            {cateringProcessIntro.heading}
          </h2>
          <p className="max-w-xl font-body text-base text-ink-700 laptop:text-lg">
            {cateringServiceStatement.prefix} {cateringServiceStatement.priceQualifier}{" "}
            <span className="font-semibold text-primary-600">{formattedPrice}</span>
          </p>
          <p className="font-body text-sm font-semibold uppercase tracking-[1px] text-ink-900">
            {cateringIncludesLabel}
          </p>
        </div>

        {steps.length > 0 && (
          // Icon and title/description stay one flex-col unit per step (as before)
          // so responsive wrapping on mobile/tablet keeps each step's icon paired
          // with its own text. The connector is a single absolutely-positioned
          // line behind the list, shown only at the laptop breakpoint where the
          // 5 steps are guaranteed one row — top-10 matches the h-20 icon circle
          // (its own top edge is the row's top edge, so its center sits at exactly
          // half its own height). Circles paint after it in DOM order and carry an
          // opaque fill, so the line reads as running behind them, not through them.
          <div className="relative mt-8">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-10 hidden h-0 border-t-2 border-dotted border-gold-decorative laptop:block"
            />
            <Grid columns={{ base: 2, tablet: 3, laptop: 5 }} gap="md" as="ul" className="relative">
              {steps.map((step) => (
                <li key={step.id} className="flex flex-col items-center gap-2 text-center">
                  <span
                    aria-hidden
                    className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold-decorative bg-surface-white"
                  >
                    <Image src={step.icon} alt="" width={64} height={64} />
                  </span>
                  <span className="font-body text-sm font-semibold text-ink-900">
                    {step.title}
                  </span>
                  <p className="font-body text-xs leading-[1.5] text-ink-700">
                    {step.description}
                  </p>
                </li>
              ))}
            </Grid>
          </div>
        )}
      </Surface>
    </Section>
  );
}
