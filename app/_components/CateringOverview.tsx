import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Button from "./ui/Button";
import { cateringEvents } from "../_data/cateringEvents";
import { homeImages, resolveImage } from "../_data/homeImages";
import { cateringOverviewContent } from "../_data/homeContent";

export default function CateringOverview() {
  return (
    <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-border-hairline bg-gradient-to-br from-cream-500 to-cream-300 p-4 laptop:flex-row laptop:items-stretch laptop:gap-8 laptop:p-5">
      <div className="flex flex-1 flex-col justify-center gap-5">
        <SectionHeading
          title={cateringOverviewContent.title}
          subtitle={cateringOverviewContent.subtitle}
          align="center"
          as="h3"
        />

        <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-4">
          {cateringEvents.map((event) => (
            <li key={event.label} className="flex flex-col items-center gap-1.5 text-center">
              <Image src={event.icon} alt="" width={66} height={66} aria-hidden />
              <span className="font-body text-sm font-semibold text-ink-900">
                {event.label}
              </span>
              <span className="font-body text-xs text-ink-700">{event.supportText}</span>
            </li>
          ))}
        </ul>

        <Button href={cateringOverviewContent.cta.href} size="lg" className="self-start">
          {cateringOverviewContent.cta.label}
        </Button>
      </div>

      {/* Stacked full-width below laptop; from laptop up this is 42% of the
          row's content box, where the row itself is the page grid's 1fr
          column (container width minus the 360px Most Popular column and
          the row gap) minus this card's own padding. */}
      <ImagePlaceholder
        ratio="4:5"
        alt="Catering table set with professional presentation for a celebration"
        className="w-full laptop:w-[42%] laptop:shrink-0 laptop:self-center"
        src={resolveImage(homeImages.catering)}
        sizes="(min-width: 1600px) 420px, (min-width: 1280px) calc(42vw - 252px), (min-width: 1024px) calc(42vw - 222px), (min-width: 768px) calc(100vw - 104px), calc(100vw - 80px)"
      />
    </div>
  );
}
