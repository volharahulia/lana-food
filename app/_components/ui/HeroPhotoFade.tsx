// ---------------------------------------------------------------------------
// Shared Lana Food Hero photo/cream fade — the single visual mechanism used
// by every page Hero (Home, Menu, and any Hero added later): three
// progressively-blurred copies of the photo, each masked with its own soft
// alpha ramp, topped with a continuous cream gradient. Stacking soft,
// overlapping alpha ramps (rather than one backdrop-blur box with a hard
// edge) is what makes the blur itself appear to build up gradually — there
// is no single boundary where blur starts.
//
// Each page Hero keeps its own tuned `HeroFadeVars` (where the fade starts/
// ends for that page's photo) and passes its own `src` — only the mechanism
// below is shared. The vars must be set via `style` on a `position: relative`
// ancestor of <HeroPhotoFade /> (see Hero.tsx / MenuHero.tsx), since that
// ancestor's box is what "0%"/"100%" are measured against.
// ---------------------------------------------------------------------------

export type HeroFadeVarName =
  | "--hero-fade-light-blur-start"
  | "--hero-fade-light-blur-end"
  | "--hero-fade-medium-blur-start"
  | "--hero-fade-medium-blur-end"
  | "--hero-fade-heavy-blur-start"
  | "--hero-fade-heavy-blur-end"
  | "--hero-fade-cream-solid"
  | "--hero-fade-cream-strong"
  | "--hero-fade-cream-mid"
  | "--hero-fade-cream-soft"
  | "--hero-fade-cream-faint"
  | "--hero-fade-cream-clear";

export type HeroFadeVars = Record<HeroFadeVarName, string>;

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

// Shared H1 treatment for every page Hero (Lana Food Hero type scale).
// Page Heroes may append their own extra utility classes (e.g. `text-left`)
// alongside this constant without affecting the shared rules.
export const HERO_TITLE_CLASSNAME =
  "font-display text-[32px] font-semibold leading-[1.12] tracking-[-0.5px] text-ink-900 laptop:text-[42px] laptop:leading-[1.1] desktop:text-[52px]";

type HeroPhotoFadeProps = {
  /** Resolved image src for the blurred copies. Nothing renders without one. */
  src?: string;
};

export default function HeroPhotoFade({ src }: HeroPhotoFadeProps) {
  if (!src) return null;

  return (
    <>
      {HERO_BLUR_LAYERS.map(({ blur, mask }) => (
        <div
          key={blur}
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${src})`,
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
    </>
  );
}
