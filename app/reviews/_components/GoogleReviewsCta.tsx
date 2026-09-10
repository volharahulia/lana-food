import { Star } from "@phosphor-icons/react/ssr";
import Button from "../../_components/ui/Button";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import Section from "../../_components/ui/Section";
import Surface from "../../_components/ui/Surface";
import { googleReviewsUrl, googleWriteReviewUrl } from "../../_data/reviews";
import { googleCtaLabels, googleReviewsCta } from "../_data/reviewsConfig";
import { resolveImage } from "../_data/reviewsImages";
import GoogleLogoIcon from "./GoogleLogoIcon";

// Section — More Reviews on Google CTA. A horizontal bordered cream Surface
// (identity/message left, actions center, photo right) — distinct in shape
// from the shared "split" CtaBlock (which is a 2-column content/buttons
// band), so it's composed directly from Surface + Button + ImagePlaceholder
// rather than forcing a 3rd CtaBlock shape onto a component built for 2.
// The only place on the page these two Google actions render (RatingSummary
// no longer duplicates them) — "Read More Reviews on Google" resolves to
// app/_data/reviews.ts's googleReviewsUrl (viewing reviews), "Leave a
// Review" resolves to googleWriteReviewUrl (the review submission form) —
// two distinct destinations, never conflated.
export default function GoogleReviewsCta() {
  const imageSrc = resolveImage(googleReviewsCta.image.src);

  return (
    <Section spacing="default">
      <Surface
        tone="cream"
        className="flex flex-col items-center gap-6 overflow-hidden p-6 laptop:flex-row laptop:items-center laptop:gap-8 laptop:p-8"
      >
        <div className="flex items-start gap-4 laptop:flex-1">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-white text-ink-900 shadow-xs">
            <GoogleLogoIcon size={26} />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-medium text-ink-900 laptop:text-2xl">
              {googleReviewsCta.heading}
            </h2>
            <p className="max-w-sm font-body text-sm text-ink-700">{googleReviewsCta.message}</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-stretch gap-3 laptop:w-auto laptop:shrink-0">
          {googleReviewsUrl ? (
            <Button href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" size="md">
              {googleCtaLabels.readMore}
            </Button>
          ) : (
            <Button type="button" disabled size="md">
              {googleCtaLabels.readMore}
            </Button>
          )}
          {googleWriteReviewUrl ? (
            <Button
              href={googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
            >
              {googleCtaLabels.leaveReview}
              <Star size={16} aria-hidden />
            </Button>
          ) : (
            <Button type="button" disabled variant="secondary" size="md">
              {googleCtaLabels.leaveReview}
              <Star size={16} aria-hidden />
            </Button>
          )}
        </div>

        <ImagePlaceholder
          ratio="1:1"
          alt={googleReviewsCta.image.alt}
          className="w-full shrink-0 laptop:w-[200px]"
          src={imageSrc}
          objectPosition={googleReviewsCta.image.objectPosition}
          sizes="(min-width: 1024px) 200px, calc(100vw - 40px)"
        />
      </Surface>
    </Section>
  );
}
