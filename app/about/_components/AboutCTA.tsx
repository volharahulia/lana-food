import Button from "../../_components/ui/Button";
import HeartDivider from "../../_components/ui/HeartDivider";
import { aboutCta } from "../_data/aboutConfig";

// Section 4 — Closing CTA. Full-width red band matching the About reference
// (distinct from Home's centered/rounded ContactCTA card — this page's
// reference shows a full-bleed band with a left text block and two buttons
// on the right), built from the same tokens/Button component.
export default function AboutCTA() {
  return (
    <section className="bg-primary-600 py-10 laptop:py-12">
      <div className="container-page flex flex-col items-start gap-6 laptop:flex-row laptop:items-center laptop:justify-between laptop:gap-8">
        <div className="flex flex-col items-start gap-3">
          <HeartDivider className="text-cream-300" />
          <h2 className="font-display text-2xl font-medium text-cream-300 laptop:text-[32px]">
            {aboutCta.headline}
          </h2>
          <p className="max-w-xl font-body text-base text-cream-300/90 laptop:text-lg">
            {aboutCta.supportText}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Button href={aboutCta.primaryCta.href} variant="inverse" size="lg">
            {aboutCta.primaryCta.label}
          </Button>
          <Button href={aboutCta.secondaryCta.href} variant="ghost" size="lg">
            {aboutCta.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
