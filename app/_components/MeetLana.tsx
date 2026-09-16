import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Button from "./ui/Button";
import { homeImages, resolveImage } from "../_data/homeImages";
import { meetLanaContent } from "../_data/homeContent";

export default function MeetLana() {
  const lanaPortraitSrc = resolveImage(homeImages.lanaPortrait);

  return (
    <div className="flex h-full flex-col items-start gap-6 tablet:grid tablet:grid-cols-[240px_1fr] tablet:items-center tablet:gap-6 laptop:items-stretch">
      {/* Stacked full-width below tablet; a fixed 240px grid column from
          tablet up. Below laptop the photo keeps its own 4:5 crop, matched
          in height to the text column via items-center. */}
      <ImagePlaceholder
        ratio="4:5"
        alt="Portrait of Lana in the kitchen"
        radiusClassName="rounded-lg laptop:hidden"
        src={lanaPortraitSrc}
        className="w-full tablet:w-[240px]"
        sizes="(min-width: 768px) 240px, calc(100vw - 40px)"
      />
      {/* Laptop+: photo stretches to the full height of the row (the row's
          height is set by the taller Reviews column — see page.tsx's
          items-stretch), object-cover crops it rather than distorting it. */}
      <div className="relative hidden h-full overflow-hidden rounded-lg laptop:block">
        <ImagePlaceholder
          ratio="auto"
          alt="Portrait of Lana in the kitchen"
          radiusClassName="rounded-none"
          className="h-full"
          src={lanaPortraitSrc}
          sizes="240px"
        />
      </div>

      <div className="flex flex-col items-start gap-5 laptop:h-full">
        <SectionHeading title={meetLanaContent.title} align="left" />
        <p className="max-w-2xl font-body text-base leading-[1.6] text-ink-700 laptop:text-lg">
          {meetLanaContent.body}
        </p>
        {/* laptop:mt-auto pins the CTA to the bottom of the stretched text
            column, level with the bottom of the Reviews column/photo. */}
        <Button href={meetLanaContent.cta.href} variant="secondary" className="laptop:mt-auto">
          {meetLanaContent.cta.label}
        </Button>
      </div>
    </div>
  );
}
