import type { ReactNode } from "react";
import Button, { type Variant as ButtonVariant } from "./Button";
import Section from "./Section";

// Shared, repeatable "CTA Block" — the single implementation behind Home's
// ContactCTA, About's AboutCTA, Catering's CateringFinalCta, and Reviews'
// ReviewsFinalCta. Each of those is a thin adapter translating its own
// content into these props; none of them own layout logic of their own.
// One approved visual pattern: a full-bleed red banner (Section
// spacing="compact", width="full-bleed", background="primary"), content
// left-aligned, actions right-aligned on desktop — the full-width red
// treatment ABOUT.md §4 and CATERING.md §9 both call for. An earlier
// "centered" rounded-card variant existed for Home only; it was never an
// approved requirement (HOMEPAGE.md §8 specifies Contact CTA content, not a
// card treatment) and was retired so every page-end CTA shares one actual
// pattern rather than two variants that happened to be swapped in per page.

export type CtaHeading = string | { line1: string; line2: string };
export type CtaButtonConfig = { label: string; href: string; variant?: ButtonVariant };

type CtaBlockProps = {
  decorative?: ReactNode;
  heading: CtaHeading;
  supportingText?: string;
  primaryCta: CtaButtonConfig;
  secondaryCta?: CtaButtonConfig;
  children?: ReactNode;
};

function Heading({ heading }: { heading: CtaHeading }) {
  const className = "font-display text-2xl font-medium text-cream-300 laptop:text-[32px]";
  if (typeof heading === "string") {
    return <h2 className={className}>{heading}</h2>;
  }
  return (
    <h2 className={className}>
      <span className="block">{heading.line1}</span>
      <span className="block text-primary-600">{heading.line2}</span>
    </h2>
  );
}

export default function CtaBlock({
  decorative,
  heading,
  supportingText,
  primaryCta,
  secondaryCta,
  children,
}: CtaBlockProps) {
  return (
    <Section spacing="compact" width="full-bleed" background="primary">
      <div className="flex flex-col items-start gap-6 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-8">
        <div className="flex flex-col items-start gap-3">
          {decorative}
          <Heading heading={heading} />
          {supportingText && (
            <p className="max-w-xl font-body text-base text-cream-300/90 laptop:text-lg">
              {supportingText}
            </p>
          )}
          {children}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Button href={primaryCta.href} variant={primaryCta.variant} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant={secondaryCta.variant} size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
