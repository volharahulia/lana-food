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

// Cream/photo fade — shared mechanism (HeroPhotoFade), disabled here exactly
// like Home's Hero (see Hero.tsx's own HERO_FADE_VARS): all-"0%" collapses
// every blur layer and the cream blend to a hairline at the photo's own
// edge, so the real reviewsHero.image.src photo reads fully sharp with a
// clean edge, the same approved desktop treatment Home uses for its real
// photo. The non-zero placeholder values previously here were tuned before
// a real photo existed and produced a heavy visible blur/white wash across
// the photo once one was added — not the intended effect.
const HERO_FADE_VARS: HeroFadeVars = {
  "--hero-fade-light-blur-start": "0%",
  "--hero-fade-light-blur-end": "0%",
  "--hero-fade-medium-blur-start": "0%",
  "--hero-fade-medium-blur-end": "0%",
  "--hero-fade-heavy-blur-start": "0%",
  "--hero-fade-heavy-blur-end": "0%",
  "--hero-fade-cream-solid": "0%",
  "--hero-fade-cream-strong": "0%",
  "--hero-fade-cream-mid": "0%",
  "--hero-fade-cream-soft": "0%",
  "--hero-fade-cream-faint": "0%",
  "--hero-fade-cream-clear": "0%",
};

// Section 1 — Reviews Hero. Same hero-split treatment/visual weight as
// every other page Hero (Home/Catering/Menu): a fixed-width text column plus
// a full photo column, rather than a bare text block — Reviews has no hero
// CTA or trust indicators in its approved content, so the text column is
// just the H1, divider and intro. Photo slot mirrors Home's Hero exactly
// (4:5 mobile / 16:9 tablet / stretched auto, sharp, fade disabled laptop+)
// now that a real photo lives at public/images/reviews/hero.jpg;
// ImagePlaceholder/resolveImage still fall back to the neutral placeholder
// automatically if that file is ever removed.
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
