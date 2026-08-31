import Hero from "./_components/Hero";
import FeaturedMenuCategories from "./_components/FeaturedMenuCategories";
import MostPopularDishes from "./_components/MostPopularDishes";
import CateringOverview from "./_components/CateringOverview";
import MeetLana from "./_components/MeetLana";
import ReviewsPreview from "./_components/ReviewsPreview";
import ContactCTA from "./_components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenuCategories />
      <section className="container-page flex flex-col gap-5 py-10 laptop:grid laptop:grid-cols-[360px_1fr] laptop:items-stretch laptop:gap-6 laptop:py-16 desktop:gap-8">
        <MostPopularDishes />
        <CateringOverview />
      </section>
      <section className="container-page flex flex-col gap-10 py-10 laptop:grid laptop:grid-cols-2 laptop:items-start laptop:gap-12 laptop:py-16">
        <MeetLana />
        <ReviewsPreview />
      </section>
      <ContactCTA />
    </>
  );
}
