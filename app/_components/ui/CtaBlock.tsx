import type { ReactNode } from "react";
import Button, { type Variant as ButtonVariant } from "./Button";
import Section from "./Section";
import Surface from "./Surface";

// Shared, repeatable "CTA Block" — the single implementation behind Home's
// ContactCTA, About's AboutCTA, Catering's CateringFinalCta, and Reviews'
// ReviewsFinalCta. Each of those is a thin adapter translating its own
// content into these props; none of them own layout logic of their own.
// Only two approved visual variants exist — "centered" (a rounded card,
// e.g. Home) and "split" (a full-bleed banner with a decorative slot, e.g.
// About/Catering/Reviews). There is no image variant and no alternate
// background: nothing currently needs either, and this component should
// not carry code for a case no consumer has.
//
// "centered" is built on the shared Section (spacing="default", matching its
// only current caller's py-10/py-16 exactly) + Surface (tone="primary").
// "split" is built on Section (spacing="compact", width="full-bleed",
// background="primary") — Phase 2 deliberately tightened it from its
// previous one-off py-10/laptop:py-12 rhythm to match Section's canonical
// "compact" tier (a 8px mobile reduction), both resolving the Phase 1
// outlier and satisfying the explicit "final CTA compact proportions" call.

export type CtaHeading = string | { line1: string; line2: string };
export type CtaButtonConfig = { label: string; href: string; variant?: ButtonVariant };

type CtaBlockProps = {
  layout: "centered" | "split";
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
  layout,
  decorative,
  heading,
  supportingText,
  primaryCta,
  secondaryCta,
  children,
}: CtaBlockProps) {
  const buttons = (
    <>
      <Button href={primaryCta.href} variant={primaryCta.variant} size="lg">
        {primaryCta.label}
      </Button>
      {secondaryCta && (
        <Button href={secondaryCta.href} variant={secondaryCta.variant} size="lg">
          {secondaryCta.label}
        </Button>
      )}
    </>
  );

  const content = (
    <>
      {decorative}
      <Heading heading={heading} />
      {supportingText && (
        <p className="max-w-xl font-body text-base text-cream-300/90 laptop:text-lg">
          {supportingText}
        </p>
      )}
      {children}
    </>
  );

  if (layout === "centered") {
    return (
      <Section spacing="default">
        <Surface
          tone="primary"
          className="flex flex-col items-center gap-5 px-6 py-10 text-center laptop:px-12 laptop:py-12"
        >
          {content}
          <div className="flex flex-wrap items-center justify-center gap-3">{buttons}</div>
        </Surface>
      </Section>
    );
  }

  return (
    <Section spacing="compact" width="full-bleed" background="primary">
      <div className="flex flex-col items-start gap-6 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-8">
        <div className="flex flex-col items-start gap-3">{content}</div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">{buttons}</div>
      </div>
    </Section>
  );
}
