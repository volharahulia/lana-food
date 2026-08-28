import type { CSSProperties } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import ImagePlaceholder from "./ui/ImagePlaceholder";

// Approved icon set — public/images/icons/ is the single source of truth
// (CLAUDE.md §33 / asset audit); do not substitute Phosphor or another
// library for these four.
const trustIndicators = [
  { label: "Fresh Ingredients", icon: "/images/icons/fresh_ingredients_icon.svg" },
  { label: "Homemade Recipes", icon: "/images/icons/homemade_recipes_icon.svg" },
  { label: "Reliable Service", icon: "/images/icons/reliable_service_icon.svg" },
  { label: "Made with Love", icon: "/images/icons/made_with_love_icon.svg" },
];

const HERO_IMAGE_SRC = "/images/home/hero-table.png";

// ---------------------------------------------------------------------------
// Hero cream/photo fade — every adjustable position lives here as a CSS
// custom property, all expressed as "% across the photo, from the cream
// edge (0%) to the sharp side (100%)". Nothing below this block should need
// to change to move the fade boundary — edit these values only.
//
// Each blur layer's "-end" is where that layer has fully disappeared, i.e.
// how far right that amount of softness reaches. HERO_FADE_VARS["--hero-fade-cream-clear"]
// is where the cream color-blend has fully disappeared, i.e. where the photo
// reads as 100% sharp with no cream tint. Move that one value to shift the
// overall fade boundary left (smaller %, more of the photo stays sharp) or
// right (larger %, the soft/tinted zone reaches further into the photo).
// ---------------------------------------------------------------------------
const HERO_FADE_VARS = {
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
} as CSSProperties;

// Progressive-blur ramp for the left edge of the Hero photo: three copies of
// the same image at increasing blur radii, each faded in with its own
// gradient mask. Stacking soft, overlapping alpha ramps (rather than one
// backdrop-blur box with a hard edge) is what makes the blur itself appear
// to build up gradually — there is no single boundary where blur starts.
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

// Final blend into the solid cream ground. A continuous multi-stop gradient
// (rather than a flat color block) so opacity itself ramps smoothly and
// there is no point where the fade visibly "starts."
const HERO_CREAM_BLEND =
  "linear-gradient(to right, var(--color-cream-500) var(--hero-fade-cream-solid), rgba(246,237,224,0.92) var(--hero-fade-cream-strong), rgba(246,237,224,0.62) var(--hero-fade-cream-mid), rgba(246,237,224,0.28) var(--hero-fade-cream-soft), rgba(246,237,224,0.08) var(--hero-fade-cream-faint), transparent var(--hero-fade-cream-clear))";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-500">
      <div className="container-page grid gap-6 py-8 laptop:grid-cols-[400px_1fr] laptop:items-stretch laptop:gap-8 laptop:py-12 desktop:grid-cols-[440px_1fr] desktop:gap-12 desktop:py-16">
        <div className="relative order-1 laptop:order-2 laptop:h-full">
          {/* Mobile: stacked layout, no sibling to match height against — fixed crop.
              Container-page mobile padding is 20px each side. */}
          <ImagePlaceholder
            ratio="4:5"
            alt="Signature Lana Food spread of homemade dishes, ready for a celebration"
            radiusClassName="rounded-lg tablet:hidden"
            src={HERO_IMAGE_SRC}
            sizes="calc(100vw - 40px)"
            priority
          />
          {/* Tablet: still stacked (grid columns only start at laptop) — fixed crop.
              Container-page tablet padding is 32px each side. */}
          <ImagePlaceholder
            ratio="16:9"
            alt="Signature Lana Food spread of homemade dishes, ready for a celebration"
            radiusClassName="rounded-lg hidden tablet:block laptop:hidden"
            src={HERO_IMAGE_SRC}
            sizes="calc(100vw - 64px)"
            priority
          />
          {/* Laptop+: side-by-side with text — no fixed aspect box. The image
              stretches to the row's actual height (set by the text column via
              the grid's stretch alignment above), so the photo fills the full
              visual height of the Hero instead of sitting in an isolated crop. */}
          <div
            className="relative hidden h-full overflow-hidden rounded-lg laptop:block"
            style={HERO_FADE_VARS}
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

            {/* Seamless cream/photo transition: stacked, softly-masked blur
                copies of the same photo (no backdrop-blur box, so there is
                no rectangular edge), topped with a continuous cream gradient.
                Every layer fades via a smooth alpha ramp — nothing here is
                clipped to a hard boundary. */}
            {HERO_BLUR_LAYERS.map(({ blur, mask }) => (
              <div
                key={blur}
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${HERO_IMAGE_SRC})`,
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
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-cream-500 to-transparent tablet:block laptop:hidden"
          />
        </div>

        <div className="order-2 flex flex-col items-start gap-4 laptop:order-1">
          <div className="flex items-center gap-3 text-primary-600">
            <span aria-hidden className="h-px w-8 bg-primary-600" />
            <span className="font-body text-xs font-semibold uppercase tracking-[2px]">
              California Catering
            </span>
          </div>

          <h1 className="font-display text-[32px] font-semibold leading-[1.12] tracking-[-0.5px] text-ink-900 laptop:text-[42px] desktop:text-[52px] laptop:leading-[1.1] text-left">
            Homemade Eastern European Cuisine for Life&rsquo;s Best Moments
          </h1>

          <p className="max-w-md font-body text-base leading-[1.6] text-ink-700 laptop:text-base desktop:text-lg">
            From family gatherings to corporate events, we bring authentic
            homemade flavors, beautiful presentation, and warm hospitality to
            your table.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
            <Button href="/menu" variant="secondary" size="lg">
              View Menu
            </Button>
          </div>

          <ul className="mt-2 grid grid-cols-2 gap-x-5 gap-y-3 tablet:grid-cols-4">
            {trustIndicators.map(({ label, icon }) => (
              <li key={label} className="flex flex-col items-start gap-1.5">
                <Image src={icon} alt="" width={56} height={56} aria-hidden />
                <span className="font-body text-sm text-ink-700">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
