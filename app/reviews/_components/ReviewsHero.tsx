import HeartDivider from "../../_components/ui/HeartDivider";
import { HERO_TITLE_CLASSNAME } from "../../_components/ui/HeroPhotoFade";
import Section from "../../_components/ui/Section";
import { reviewsHero } from "../_data/reviewsConfig";

// Section 1 — Reviews Hero / Page Header. No breadcrumb and no photo (per
// explicit project correction) — a single text column using the shared Hero
// title treatment (HERO_TITLE_CLASSNAME, the same constant every other page
// Hero uses) and the shared HeartDivider flourish. The Section naturally
// sizes to its (now much shorter) content — no fixed/min height, no
// compensating offset.
export default function ReviewsHero() {
  return (
    <Section spacing="compact" width="full-bleed" background="cream">
      <div className="flex flex-col items-start gap-4">
        <h1 className={HERO_TITLE_CLASSNAME}>{reviewsHero.h1}</h1>

        <HeartDivider />

        {reviewsHero.intro && (
          <p className="max-w-xl font-body text-base leading-[1.6] text-ink-700 desktop:text-lg">
            {reviewsHero.intro}
          </p>
        )}
      </div>
    </Section>
  );
}
