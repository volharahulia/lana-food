import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import HeroPhotoFade, { HERO_TITLE_CLASSNAME, type HeroFadeVars } from "./ui/HeroPhotoFade";
import Section from "./ui/Section";
import Grid from "./ui/Grid";
import { heroContent, trustIndicators } from "../_data/homeContent";
import { homeImages, resolveImage } from "../_data/homeImages";

const HERO_IMAGE_SRC = resolveImage(homeImages.hero);

// ---------------------------------------------------------------------------
// Hero cream/photo fade — every adjustable position lives here as a CSS
// custom property, all expressed as "% across the photo, from the cream
// edge (0%) to the sharp side (100%)". Nothing below this block should need
// to change to move the fade boundary — edit these values only. The fade
// mechanism itself (blur layers, mask gradients, cream blend) is shared with
// every page Hero via HeroPhotoFade (app/_components/ui/HeroPhotoFade.tsx);
// only these values are specific to the Home Hero.
//
// Each blur layer's "-end" is where that layer has fully disappeared, i.e.
// how far right that amount of softness reaches. HERO_FADE_VARS["--hero-fade-cream-clear"]
// is where the cream color-blend has fully disappeared, i.e. where the photo
// reads as 100% sharp with no cream tint. Move that one value to shift the
// overall fade boundary left (smaller %, more of the photo stays sharp) or
// right (larger %, the soft/tinted zone reaches further into the photo).
// ---------------------------------------------------------------------------
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

export default function Hero() {
  return (
    // className="relative overflow-hidden" is required here, not decorative:
    // it's the containing block for the absolutely-positioned bottom-fade
    // scrim further down and a safety clip for the stretched laptop+ photo
    // column at ultra-wide viewports — both pre-existing, kept verbatim.
    <Section spacing="compact" width="full-bleed" background="cream" className="relative overflow-hidden">
      <Grid columns="hero-split">
        <div className="relative order-1 laptop:order-2 laptop:h-full">
          {/* Mobile + tablet: stacked layout, no sibling to match height against —
              fixed 16:9 landscape crop (the source photo is itself a 16:9
              horizontal shot, so this shows it uncropped rather than punching a
              tall portrait window into a wide scene). One box covers both
              breakpoints since the ratio no longer changes between them — only
              the container padding does (20px mobile / 32px tablet), reflected
              in `sizes`. */}
          <ImagePlaceholder
            ratio="16:9"
            alt="Signature Lana Food spread of homemade dishes, ready for a celebration"
            radiusClassName="rounded-lg laptop:hidden"
            src={HERO_IMAGE_SRC}
            sizes="(min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
            priority
          />
          {/* Laptop+: side-by-side with text — no fixed aspect box. The image
              stretches to the row's actual height (set by the text column via
              the grid's stretch alignment above), so the photo fills the full
              visual height of the Hero instead of sitting in an isolated crop. */}
          <div
            className="relative hidden h-full overflow-hidden rounded-lg laptop:block"
            style={HERO_FADE_VARS as CSSProperties}
          >
            {/* Laptop+ image column width = container-page content width minus
                the fixed text column (400px laptop / 440px desktop) and the
                row gap (32px laptop / 48px desktop), capped once the
                container itself hits its 1440px max at ~1600px viewport. */}
            <ImagePlaceholder
              ratio="auto"
              alt="Signature Lana Food spread of homemade dishes, ready for a celebration"
              radiusClassName="rounded-none"
              className="h-full"
              src={HERO_IMAGE_SRC}
              sizes="(min-width: 1600px) 952px, (min-width: 1280px) calc(100vw - 648px), calc(100vw - 528px)"
              priority
            />

            {/* Seamless cream/photo transition — shared mechanism, see
                HeroPhotoFade (app/_components/ui/HeroPhotoFade.tsx). */}
            <HeroPhotoFade src={HERO_IMAGE_SRC} />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-cream-500 to-transparent tablet:block laptop:hidden"
          />
        </div>

        <div className="order-2 flex flex-col items-start gap-4 laptop:order-1">
          <div className="flex items-center gap-3 text-primary-600">
            <span aria-hidden className="h-px w-8 bg-primary-600" />
            <span className="font-body text-xs font-semibold uppercase tracking-[2px]">
              {heroContent.eyebrow}
            </span>
          </div>

          <h1 className={`${HERO_TITLE_CLASSNAME} text-left`}>{heroContent.h1}</h1>

          <p className="max-w-md font-body text-base leading-[1.6] text-ink-700 laptop:text-base desktop:text-lg">
            {heroContent.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={heroContent.primaryCta.href} size="lg">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary" size="lg">
              {heroContent.secondaryCta.label}
            </Button>
          </div>

          <Grid columns="trust-indicators" as="ul" className="mt-2">
            {trustIndicators.map(({ label, icon }) => (
              <li key={label} className="flex flex-col items-start gap-1.5">
                <Image src={icon} alt="" width={56} height={56} aria-hidden />
                <span className="font-body text-sm text-ink-700">{label}</span>
              </li>
            ))}
          </Grid>
        </div>
      </Grid>
    </Section>
  );
}
