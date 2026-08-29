import { MapPin, ArrowRight } from "@phosphor-icons/react/ssr";
import { business } from "../../_data/business";

const frameClassName = "overflow-hidden rounded-lg laptop:h-full laptop:min-h-[360px]";
const ratioClassName = "aspect-[4/3] laptop:aspect-auto laptop:h-full";

// Compact Google Maps location preview/link (CLAUDE.md Contact page
// decisions). business.googleMapsEmbedUrl (the official iframe src from
// Google Maps -> Share -> Embed a map -> Copy HTML) and business.googleMapsUrl
// (the public listing, used only as an outbound link) are two independent
// values — neither is derived or transformed from the other.
export default function MapPreview() {
  const mapsUrl = business.googleMapsUrl;
  const embedUrl = business.googleMapsEmbedUrl;

  if (embedUrl) {
    return (
      <div className={`${frameClassName} border border-border-hairline`}>
        <div className={`relative ${ratioClassName}`}>
          <iframe
            src={embedUrl}
            title="Lana Food location map"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          {/* Sibling of the iframe, not a wrapper around it — an <a> can't
              contain an <iframe> without breaking the iframe's own
              pan/zoom/click interaction, so the link-out lives in this
              overlay card instead of wrapping the whole preview. */}
          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-4 top-4 max-w-[220px] rounded-md bg-surface-white p-4 shadow-md"
            >
              <p className="font-display text-base font-medium text-ink-900">{business.name}</p>
              <p className="font-body text-sm text-ink-700">{business.location}</p>
              <span className="mt-1 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary-600 hover:underline">
                View on Google Maps
                <ArrowRight size={14} aria-hidden />
              </span>
            </a>
          )}
        </div>
      </div>
    );
  }

  // No embed URL yet: never render a broken iframe. Fall back to a static
  // location card, still linking out to the real listing when available.
  const card = (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-cream-500 p-6 text-center">
      <span
        aria-hidden
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600"
      >
        <MapPin size={26} weight="fill" />
      </span>
      <div>
        <p className="font-display text-base font-medium text-ink-900">{business.name}</p>
        <p className="font-body text-sm text-ink-700">{business.location}</p>
      </div>
      {mapsUrl && (
        <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary-600">
          View on Google Maps
          <ArrowRight size={14} aria-hidden />
        </span>
      )}
    </div>
  );

  if (!mapsUrl) {
    return (
      <div className={`${frameClassName} border border-dashed border-border-strong`}>
        <div className={ratioClassName}>
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-cream-700 p-6 text-center">
            <MapPin size={28} weight="thin" className="text-ink-500/60" aria-hidden />
            <p className="font-display text-base font-medium text-ink-900">{business.name}</p>
            <p className="font-body text-sm text-ink-700">{business.location}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${business.name} on Google Maps`}
      className={`${frameClassName} block border border-border-hairline transition-shadow hover:shadow-sm focus-visible:shadow-sm`}
    >
      <div className={ratioClassName}>{card}</div>
    </a>
  );
}
