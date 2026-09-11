import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "../../_components/ui/Button";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import HeroPhotoFade, {
  HERO_TITLE_CLASSNAME,
  type HeroFadeVars,
} from "../../_components/ui/HeroPhotoFade";
import Section from "../../_components/ui/Section";
import Grid from "../../_components/ui/Grid";
import { cateringHero, cateringTrustIndicators } from "../_data/cateringConfig";
import { resolveImage } from "../_data/cateringImages";

// Cream/photo fade — same shared mechanism as Home/Menu Hero (see
// app/_components/ui/HeroPhotoFade.tsx). Only these position values are
// specific to the Catering Hero photo.
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

export default function CateringHero() {
  const heroSrc = resolveImage(cateringHero.image.src);

  return (
    // className="relative overflow-hidden" required — containing block for
    // the absolutely-positioned bottom-fade scrim and a clip for the
    // stretched laptop+ photo column, same as Home's Hero.
    <Section spacing="compact" width="full-bleed" background="cream" className="relative overflow-hidden">
      <Grid columns="hero-split">
        <div className="order-2 flex flex-col items-start gap-4 laptop:order-1">
          <div className="flex items-center gap-3 text-primary-600">
            <span aria-hidden className="h-px w-8 bg-primary-600" />
            <span className="font-body text-xs font-semibold uppercase tracking-[2px]">
              {cateringHero.eyebrow}
            </span>
          </div>

          <h1 className={HERO_TITLE_CLASSNAME}>
            <span className="block">{cateringHero.h1.line1}</span>
            <span className="block text-primary-600">{cateringHero.h1.line2}</span>
          </h1>

          <p className="font-accent text-2xl text-primary-600">{cateringHero.decorativeLine}</p>

          <p className="max-w-md font-body text-base leading-[1.6] text-ink-700 laptop:text-base desktop:text-lg">
            {cateringHero.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={cateringHero.primaryCta.href} size="lg">
              {cateringHero.primaryCta.label}
            </Button>
            <Button href={cateringHero.secondaryCta.href} variant="secondary" size="lg">
              {cateringHero.secondaryCta.label}
            </Button>
          </div>

          <Grid columns="trust-indicators" as="ul" className="mt-2 w-full">
            {cateringTrustIndicators.map(({ label, icon }) => (
              <li
                key={label}
                className="flex min-w-0 flex-col items-center gap-1.5 text-center"
              >
                <Image src={icon} alt="" width={56} height={56} aria-hidden />
                <span className="font-body text-sm text-ink-700">{label}</span>
              </li>
            ))}
          </Grid>
        </div>

        <div className="relative order-1 laptop:order-2 laptop:h-full">
          <ImagePlaceholder
            ratio="4:5"
            alt={cateringHero.image.alt}
            radiusClassName="rounded-lg tablet:hidden"
            src={heroSrc}
            objectPosition={cateringHero.image.objectPosition}
            sizes="calc(100vw - 40px)"
            priority
          />
          <ImagePlaceholder
            ratio="16:9"
            alt={cateringHero.image.alt}
            radiusClassName="rounded-lg hidden tablet:block laptop:hidden"
            src={heroSrc}
            objectPosition={cateringHero.image.objectPosition}
            sizes="calc(100vw - 64px)"
            priority
          />
          <div
            className="relative hidden h-full overflow-hidden rounded-lg laptop:block"
            style={HERO_FADE_VARS as CSSProperties}
          >
            <ImagePlaceholder
              ratio="auto"
              alt={cateringHero.image.alt}
              radiusClassName="rounded-none"
              className="h-full"
              src={heroSrc}
              objectPosition={cateringHero.image.objectPosition}
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
