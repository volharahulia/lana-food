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
      <section className="mx-auto flex max-w-[1400px] flex-col gap-5 px-4 py-10 tablet:px-6 laptop:grid laptop:grid-cols-[360px_1fr] laptop:px-8 laptop:py-16 desktop:px-12">
        <MostPopularDishes />
        <CateringOverview />
      </section>
      <MeetLana />
      <ReviewsPreview />
      <ContactCTA />
    </>
  );
}
