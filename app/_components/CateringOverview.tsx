import { Cake, BabyCarriage, UsersThree, Briefcase } from "@phosphor-icons/react/ssr";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Button from "./ui/Button";
import { cateringEvents, type CateringEvent } from "../_data/cateringEvents";
import { homeImages, resolveImage } from "../_data/homeImages";

const iconMap: Record<CateringEvent["icon"], typeof Cake> = {
  cake: Cake,
  stroller: BabyCarriage,
  usersThree: UsersThree,
  briefcase: Briefcase,
};

export default function CateringOverview() {
  return (
    <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-lg border border-border-hairline bg-gradient-to-br from-cream-500 to-cream-300 p-5 laptop:flex-row laptop:items-stretch laptop:gap-8 laptop:p-6">
      <div className="flex flex-1 flex-col justify-center gap-5">
        <SectionHeading
          title="Catering with Professional Setup"
          subtitle="Complete catering service for any event."
          align="left"
          as="h3"
        />

        <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-4">
          {cateringEvents.map((event) => {
            const Icon = iconMap[event.icon];
            return (
              <li key={event.label} className="flex flex-col items-start gap-1.5">
                <Icon size={26} weight="thin" className="text-primary-600" aria-hidden />
                <span className="font-body text-sm font-semibold text-ink-900">
                  {event.label}
                </span>
                <span className="font-body text-xs text-ink-700">{event.supportText}</span>
              </li>
            );
          })}
        </ul>

        <Button href="/catering" size="lg" className="self-start">
          Explore Catering
        </Button>
      </div>

      <ImagePlaceholder
        ratio="auto"
        alt="Catering table set with professional presentation for a celebration"
        className="h-56 tablet:h-72 laptop:h-auto laptop:w-[340px] laptop:shrink-0"
        src={resolveImage(homeImages.catering)}
      />
    </div>
  );
}
