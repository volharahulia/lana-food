import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import { cateringEventCards, cateringEventsIntro } from "../_data/cateringConfig";
import { resolveImage } from "../_data/cateringImages";

// Section 4 — Celebrations We Cater. Renders the published event cards from
// data (CATERING.md §6/§10) — add/remove/rename/reorder/unpublish an event
// by editing cateringEventCards, never this component.
export default function CateringEventTypes() {
  const events = cateringEventCards
    .filter((e) => e.published)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  if (events.length === 0) return null;

  return (
    <section className="bg-cream-500 py-10 laptop:py-16">
      <div className="container-page flex flex-col items-center gap-3 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
          {cateringEventsIntro.eyebrow}
        </p>
        <h2 className="font-display text-2xl font-medium text-ink-900 laptop:text-[32px]">
          {cateringEventsIntro.heading}
        </h2>
      </div>

      <ul className="container-page mt-8 grid grid-cols-2 gap-5 tablet:grid-cols-3 laptop:grid-cols-5">
        {events.map((event) => (
          <li key={event.id} className="flex flex-col items-center gap-3">
            <ImagePlaceholder
              ratio="1:1"
              alt={event.imageAlt}
              className="w-full"
              src={resolveImage(event.image)}
              objectPosition={event.objectPosition}
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 45vw"
            />
            <span className="font-body text-sm font-semibold text-ink-900">{event.title}</span>
            {event.description && (
              <p className="text-center font-body text-xs text-ink-700">{event.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
