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
          // One structure for both breakpoints — only the Grid's column count,
          // the icon-circle size, and which connector is visible change
          // responsively; the step content (icon/title/description) is never
          // duplicated. Desktop (laptop+, unchanged): 5-across, the existing
          // shared horizontal line behind the circles (top-10 = half of h-20,
          // so it centers on them; circles paint after it in DOM order and
          // occlude it at each step). Mobile/tablet (new): a single column —
          // a vertical timeline — where each step (but the last) trails a
          // short in-flow dotted segment down to the next icon. Being a
          // normal-flow element sitting strictly between two steps, it can
          // never run through an icon or through any step's own text; no
          // absolute positioning or offset math is needed for it at all.
          <div className="relative mt-8">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-10 hidden h-0 border-t-2 border-dotted border-gold-decorative laptop:block"
            />
            <Grid columns={{ base: 1, laptop: 5 }} gap="md" as="ul" className="relative">
              {steps.map((step, index) => (
                <li key={step.id} className="flex flex-col items-center gap-2 text-center">
                  <span
                    aria-hidden
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold-decorative bg-surface-white laptop:h-20 laptop:w-20"
                  >
                    <Image
                      src={step.icon}
                      alt=""
                      width={64}
                      height={64}
                      className="h-11 w-11 laptop:h-auto laptop:w-auto"
                    />
                  </span>
                  <span className="font-body text-sm font-semibold text-ink-900">
                    {step.title}
                  </span>
                  <p className="font-body text-xs leading-[1.5] text-ink-700">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="h-6 w-0 border-l-2 border-dotted border-gold-decorative laptop:hidden"
                    />
                  )}
                </li>
              ))}
            </Grid>
          </div>
        )}
      </Surface>
    </Section>
  );
}
