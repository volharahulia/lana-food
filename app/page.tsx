import Hero from "./_components/Hero";
import FeaturedMenuCategories from "./_components/FeaturedMenuCategories";
import MostPopularDishes from "./_components/MostPopularDishes";
import CateringOverview from "./_components/CateringOverview";
import MeetLana from "./_components/MeetLana";
import ReviewsPreview from "./_components/ReviewsPreview";
import ContactCTA from "./_components/ContactCTA";
import Section from "./_components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenuCategories />
      {/* Each pair's own column formula (360px fixed / plain 2-up, distinct
          gaps) is bespoke to this single page composition and isn't
          duplicated anywhere else, so it stays a page-level Content-layer
          arrangement inside Section rather than a new Grid variant. */}
      <Section spacing="compact">
        <div className="flex flex-col gap-5 laptop:grid laptop:grid-cols-[360px_1fr] laptop:items-stretch laptop:gap-6 desktop:gap-8">
          <MostPopularDishes />
          <CateringOverview />
        </div>
      </Section>
      <Section spacing="compact">
        <div className="flex flex-col gap-10 laptop:grid laptop:grid-cols-2 laptop:items-start laptop:gap-12">
          <MeetLana />
          <ReviewsPreview />
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
