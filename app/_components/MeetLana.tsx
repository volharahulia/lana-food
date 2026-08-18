import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Button from "./ui/Button";
import { homeImages, resolveImage } from "../_data/homeImages";

export default function MeetLana() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-10 tablet:px-6 laptop:px-8 laptop:py-16 desktop:px-12">
      <div className="grid grid-cols-1 items-center gap-6 laptop:grid-cols-[360px_1fr] laptop:gap-12">
        <ImagePlaceholder
          ratio="4:5"
          alt="Portrait of Lana in the kitchen"
          radiusClassName="rounded-lg"
          src={resolveImage(homeImages.lanaPortrait)}
        />

        <div className="flex flex-col items-start gap-5">
          <SectionHeading title="Meet Lana" align="left" />
          <p className="max-w-2xl font-body text-base leading-[1.6] text-ink-700 laptop:text-lg">
            At Lana Food, every dish starts in a home kitchen, not a factory
            line. We prepare each order the way we&rsquo;d cook for our own
            family — from scratch, with fresh ingredients and no artificial
            anything. It&rsquo;s homemade Eastern European cooking, made with
            love, for your table across the San Francisco Bay Area.
          </p>
          <Button href="/about" variant="secondary">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
