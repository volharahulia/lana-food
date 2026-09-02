import { Heart } from "@phosphor-icons/react/ssr";
import HeartDivider from "../../_components/ui/HeartDivider";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import Section from "../../_components/ui/Section";
import { aboutFounder } from "../_data/aboutConfig";
import { aboutImages, resolveImage } from "../_data/aboutImages";

// Section 1 — About Lana / Founder Story. Text first in the DOM so it reads
// first on both mobile (ABOUT.md: "text followed by founder portrait") and
// desktop (text left) — no order-flip needed, unlike the Home/Menu Hero.
export default function AboutFounder() {
  return (
    <Section spacing="default">
      <div className="grid gap-8 laptop:grid-cols-2 laptop:items-center laptop:gap-12">
        <div className="flex flex-col items-start gap-5">
          <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
            {aboutFounder.eyebrow}
          </p>
          <HeartDivider />

          <h1 className="whitespace-pre-line font-display text-[34px] font-semibold leading-[40px] tracking-[-0.5px] text-ink-900 laptop:text-[56px] laptop:leading-[64px]">
            {aboutFounder.h1}
          </h1>

          <p className="max-w-xl font-body text-base leading-[1.6] text-ink-700 laptop:text-lg">
            {aboutFounder.intro}
          </p>

          {aboutFounder.storyParagraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-xl font-body text-base leading-[1.6] text-ink-700">
              {paragraph}
            </p>
          ))}

          <div className="mt-2 flex items-center gap-2 text-primary-600">
            <Heart size={18} weight="fill" aria-hidden />
            <span className="font-accent text-2xl">{aboutFounder.signature}</span>
          </div>
        </div>

        <ImagePlaceholder
          ratio="4:5"
          alt="Lana, founder of Lana Food, preparing a homemade dish in her kitchen"
          radiusClassName="rounded-lg"
          src={resolveImage(aboutImages.founderPortrait)}
          sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
        />
      </div>
    </Section>
  );
}
