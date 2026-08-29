import ContactMethods from "./ContactMethods";
import MapPreview from "./MapPreview";

// Contact methods (left) + compact map/location preview (right) — CLAUDE.md
// Contact page structure item 3. laptop:items-stretch lets the map match the
// methods column's real height instead of guessing a fixed size.
export default function ContactMain() {
  return (
    <section className="container-page py-8 laptop:py-12">
      <h2 className="sr-only">Contact Methods</h2>
      <div className="grid gap-8 laptop:grid-cols-[360px_1fr] laptop:items-stretch laptop:gap-10">
        <ContactMethods />
        <MapPreview />
      </div>
    </section>
  );
}
