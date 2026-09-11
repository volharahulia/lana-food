import type { CSSProperties } from "react";
import HeartDivider from "../../_components/ui/HeartDivider";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import HeroPhotoFade, {
  HERO_TITLE_CLASSNAME,
  type HeroFadeVars,
} from "../../_components/ui/HeroPhotoFade";
import Section from "../../_components/ui/Section";
import Grid from "../../_components/ui/Grid";
import { reviewsHero } from "../_data/reviewsConfig";
import { resolveImage } from "../_data/reviewsImages";

// Cream/photo fade — same shared mechanism and tuned values as Catering's
// and Menu's Hero (both also awaiting their real photo). Only these position
// values are specific to whichever photo eventually lands at reviewsHero.image.src.
const HERO_FADE_VARS: HeroFadeVars = {
  "--hero-fade-light-blur-start": "0%",
  "--hero-fade-light-blur-end": "20%",
  "--hero-fade-medium-blur-start": "0%",
  "--hero-fade-medium-blur-end": "32%",
  "--hero-fade-heavy-blur-start": "0%",
  "--hero-fade-heavy-blur-end": "44%",
  "--hero-fade-cream-solid": "0%",
  "--hero-fade-cream-strong": "10%",
  "--hero-fade-cream-mid": "22%",
  "--hero-fade-cream-soft": "34%",
  "--hero-fade-cream-faint": "46%",
  "--hero-fade-cream-clear": "58%",
};

// Section 1 — Reviews Hero. Same hero-split treatment/visual weight as
// every other page Hero (Home/Catering/Menu): a fixed-width text column plus
// a full photo column with the shared cream/photo fade, rather than a bare
// text block — Reviews has no hero CTA or trust indicators in its approved
// content, so the text column is just the H1, divider and intro. Photo slot
// mirrors Catering/Menu's Hero exactly (4:5 mobile / 16:9 tablet / stretched
// auto+fade laptop+) since, like theirs, no real photo exists yet — the
// established neutral placeholder renders until reviewsHero.image.src is
// filled in at public/images/reviews/hero.jpg.
export default function ReviewsHero() {
  const heroSrc = resolveImage(reviewsHero.image.src);

  return (
    <Section spacing="compact" width="full-bleed" background="cream" className="relative overflow-hidden">
      <Grid columns="hero-split">
        <div className="order-2 flex flex-col items-start gap-4 laptop:order-1 laptop:justify-center">
          <h1 className={HERO_TITLE_CLASSNAME}>{reviewsHero.h1}</h1>

          <HeartDivider />

          {reviewsHero.intro && (
            <p className="max-w-xl font-body text-base leading-[1.6] text-ink-700 desktop:text-lg">
              {reviewsHero.intro}
            </p>
          )}
        </div>

        <div className="relative order-1 laptop:order-2 laptop:h-full">
          <ImagePlaceholder
            ratio="4:5"
            alt={reviewsHero.image.alt}
            radiusClassName="rounded-lg tablet:hidden"
            src={heroSrc}
            objectPosition={reviewsHero.image.objectPosition}
            sizes="calc(100vw - 40px)"
            priority
          />
          <ImagePlaceholder
            ratio="16:9"
            alt={reviewsHero.image.alt}
            radiusClassName="rounded-lg hidden tablet:block laptop:hidden"
            src={heroSrc}
            objectPosition={reviewsHero.image.objectPosition}
            sizes="calc(100vw - 64px)"
            priority
          />
          <div
            className="relative hidden h-full overflow-hidden rounded-lg laptop:block"
            style={HERO_FADE_VARS as CSSProperties}
          >
            <ImagePlaceholder
              ratio="auto"
              alt={reviewsHero.image.alt}
              radiusClassName="rounded-none"
              className="h-full"
              src={heroSrc}
              objectPosition={reviewsHero.image.objectPosition}
              sizes="(min-width: 1600px) 952px, (min-width: 1280px) calc(100vw - 648px), calc(100vw - 528px)"
              priority
            />
            <HeroPhotoFade src={heroSrc} />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-cream-500 to-transparent tablet:block laptop:hidden"
          />
        </div>
      </Grid>
    </Section>
  );
}
