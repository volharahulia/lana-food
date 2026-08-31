import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Button from "./ui/Button";
import { homeImages, resolveImage } from "../_data/homeImages";
import { meetLanaContent } from "../_data/homeContent";

export default function MeetLana() {
  return (
    <div className="flex h-full flex-col items-start gap-6 tablet:grid tablet:grid-cols-[240px_1fr] tablet:items-center tablet:gap-6">
      {/* Stacked full-width below tablet; a fixed 240px grid column from
          tablet up — narrower than a standalone Meet Lana would use, sized
          to share the row with the Reviews column from laptop up. */}
      <ImagePlaceholder
        ratio="4:5"
        alt="Portrait of Lana in the kitchen"
        radiusClassName="rounded-lg"
        src={resolveImage(homeImages.lanaPortrait)}
        className="w-full tablet:w-[240px]"
        sizes="(min-width: 768px) 240px, calc(100vw - 40px)"
      />

      <div className="flex flex-col items-start gap-5">
        <SectionHeading title={meetLanaContent.title} align="left" />
        <p className="max-w-2xl font-body text-base leading-[1.6] text-ink-700 laptop:text-lg">
          {meetLanaContent.body}
        </p>
        <Button href={meetLanaContent.cta.href} variant="secondary">
          {meetLanaContent.cta.label}
        </Button>
      </div>
    </div>
  );
}
