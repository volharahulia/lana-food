import type { CSSProperties } from "react";
import Button from "../../_components/ui/Button";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import HeroPhotoFade, {
  HERO_TITLE_CLASSNAME,
  type HeroFadeVars,
} from "../../_components/ui/HeroPhotoFade";
import Section from "../../_components/ui/Section";
import Grid from "../../_components/ui/Grid";
import { menuHero } from "../_data/menuConfig";
import { menuImages, resolveImage } from "../_data/menuImages";

// ---------------------------------------------------------------------------
// Cream/photo fade — every adjustable position lives here as a CSS custom
// property, expressed as "% across the photo, from the cream edge (0%) to
// the fully sharp side (100%)" — nothing below this block should need to
// change to retune the fade. The fade mechanism itself (blur layers, mask
// gradients, cream blend) is shared with every page Hero via HeroPhotoFade
// (app/_components/ui/HeroPhotoFade.tsx); only these values are specific to
// the Menu Hero.
// ---------------------------------------------------------------------------
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

// Single shared page-level Hero (MENU.md "Menu Hero") — one photo for the
// whole /menu page, the same for every category tab. Composition mirrors the
// Home Hero: text fixed-width on the left, photography filling the rest on
// the right, with a soft cream-to-photo blend instead of a hard image edge.
export default function MenuHero() {
  const heroSrc = resolveImage(menuImages.hero);

  return (
    // className="relative overflow-hidden" required — containing block for
    // the absolutely-positioned bottom-fade scrim and a clip for the
    // stretched laptop+ photo column, same as Home's Hero. Phase 2: brought
    // down from "spacious" to "compact" to match Home/Catering Hero's
    // rhythm — Menu is a browsing/utility page and had no reason to carry
    // the site's single largest section padding.
    <Section spacing="compact" width="full-bleed" background="cream" className="relative overflow-hidden">
      <Grid columns="hero-split">
        <div className="order-2 flex flex-col items-start gap-4 laptop:order-1 laptop:justify-center">
          <span aria-hidden className="h-px w-12 bg-gold-decorative" />

          {menuHero.eyebrow && (
            <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
              {menuHero.eyebrow}
            </p>
          )}

          <h1 className={HERO_TITLE_CLASSNAME}>{menuHero.h1}</h1>

          {menuHero.intro && (
            <p className="max-w-md font-body text-base leading-[1.6] text-ink-700 desktop:text-lg">
              {menuHero.intro}
            </p>
          )}

          <div className="mt-2 flex flex-wrap gap-3">
            <Button href={menuHero.primaryCta.href} size="lg">
              {menuHero.primaryCta.label}
            </Button>
            {menuHero.secondaryCta && (
              <Button href={menuHero.secondaryCta.href} variant="secondary" size="lg">
                {menuHero.secondaryCta.label}
              </Button>
            )}
          </div>
        </div>

        <div className="relative order-1 laptop:order-2 laptop:h-full">
          {/* Mobile: stacked, fixed 4:5 crop (container-page mobile padding is 20px each side). */}
          <ImagePlaceholder
            ratio="4:5"
            alt="Lana Food homemade dishes, ready to serve"
            radiusClassName="rounded-lg tablet:hidden"
            src={heroSrc}
            sizes="calc(100vw - 40px)"
            priority
          />
          {/* Tablet: still stacked (grid columns only start at laptop), fixed 16:9 crop. */}
          <ImagePlaceholder
            ratio="16:9"
            alt="Lana Food homemade dishes, ready to serve"
            radiusClassName="rounded-lg hidden tablet:block laptop:hidden"
            src={heroSrc}
            sizes="calc(100vw - 64px)"
            priority
          />
          {/* Laptop+: side-by-side with text, stretched to the row's full height. */}
          <div
            className="relative hidden h-full min-h-[420px] overflow-hidden rounded-lg laptop:block"
            style={HERO_FADE_VARS as CSSProperties}
          >
            <ImagePlaceholder
              ratio="auto"
              alt="Lana Food homemade dishes, ready to serve"
              radiusClassName="rounded-none"
              className="h-full"
              src={heroSrc}
              sizes="(min-width: 1600px) 952px, (min-width: 1280px) calc(100vw - 648px), calc(100vw - 528px)"
              priority
            />

            <HeroPhotoFade src={heroSrc} />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/4 bg-gradient-to-t from-cream-500 to-transparent tablet:block laptop:hidden"
          />
        </div>
      </Grid>
    </Section>
  );
}
