import type { CSSProperties } from "react";
import Button from "../../_components/ui/Button";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import { menuHero } from "../_data/menuConfig";
import { menuImages, resolveImage } from "../_data/menuImages";

// ---------------------------------------------------------------------------
// Cream/photo fade — same technique as the Home Hero (app/_components/Hero.tsx):
// three progressively-blurred copies of the photo, each masked with its own
// soft alpha ramp, topped with a continuous cream gradient. That's what makes
// the blur build up gradually with no single hard edge, instead of one
// backdrop-blur box with a visible boundary. Every position lives here as a
// CSS custom property, expressed as "% across the photo, from the cream edge
// (0%) to the fully sharp side (100%)" — nothing below this block should need
// to change to retune the fade.
// ---------------------------------------------------------------------------
const HERO_FADE_VARS = {
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
} as CSSProperties;

const HERO_BLUR_LAYERS = [
  {
    blur: 6,
    mask:
      "linear-gradient(to right, black 0%, black var(--hero-fade-light-blur-start), transparent var(--hero-fade-light-blur-end))",
  },
  {
    blur: 16,
    mask:
      "linear-gradient(to right, black 0%, black var(--hero-fade-medium-blur-start), transparent var(--hero-fade-medium-blur-end))",
  },
  {
    blur: 34,
    mask:
      "linear-gradient(to right, black 0%, black var(--hero-fade-heavy-blur-start), transparent var(--hero-fade-heavy-blur-end))",
  },
];

const HERO_CREAM_BLEND =
  "linear-gradient(to right, var(--color-cream-500) var(--hero-fade-cream-solid), rgba(246,237,224,0.92) var(--hero-fade-cream-strong), rgba(246,237,224,0.62) var(--hero-fade-cream-mid), rgba(246,237,224,0.28) var(--hero-fade-cream-soft), rgba(246,237,224,0.08) var(--hero-fade-cream-faint), transparent var(--hero-fade-cream-clear))";

// Single shared page-level Hero (MENU.md "Menu Hero") — one photo for the
// whole /menu page, the same for every category tab. Composition mirrors the
// Home Hero: text fixed-width on the left, photography filling the rest on
// the right, with a soft cream-to-photo blend instead of a hard image edge.
export default function MenuHero() {
  const heroSrc = resolveImage(menuImages.hero);

  return (
    <section className="relative overflow-hidden bg-cream-500">
      <div className="container-page grid gap-6 py-10 laptop:grid-cols-[400px_1fr] laptop:items-stretch laptop:gap-8 laptop:py-16 desktop:grid-cols-[440px_1fr] desktop:gap-12 desktop:py-20">
        <div className="order-2 flex flex-col items-start gap-4 laptop:order-1 laptop:justify-center">
          <span aria-hidden className="h-px w-12 bg-gold-decorative" />

          {menuHero.eyebrow && (
            <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
              {menuHero.eyebrow}
            </p>
          )}

          <h1 className="font-display text-[32px] font-semibold leading-[1.12] tracking-[-0.5px] text-ink-900 laptop:text-[42px] laptop:leading-[1.1] desktop:text-[52px]">
            {menuHero.h1}
          </h1>

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
            style={HERO_FADE_VARS}
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

            {heroSrc &&
              HERO_BLUR_LAYERS.map(({ blur, mask }) => (
                <div
                  key={blur}
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${heroSrc})`,
                    filter: `blur(${blur}px)`,
                    WebkitMaskImage: mask,
                    maskImage: mask,
                  }}
                />
              ))}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: HERO_CREAM_BLEND }}
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/4 bg-gradient-to-t from-cream-500 to-transparent tablet:block laptop:hidden"
          />
        </div>
      </div>
    </section>
  );
}
