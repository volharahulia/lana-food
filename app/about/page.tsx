import type { Metadata } from "next";
import AboutFounder from "./_components/AboutFounder";
import AboutMission from "./_components/AboutMission";
import AboutValues from "./_components/AboutValues";
import AboutFoodSafety from "./_components/AboutFoodSafety";
import AboutCTA from "./_components/AboutCTA";

export const metadata: Metadata = {
  title: "About Lana Food | Family-Owned Homemade Catering | Bay Area California",
  description:
    "Meet Lana and the family behind Lana Food's authentic Eastern European homemade cooking.",
};

export default function AboutPage() {
  return (
    <>
      <AboutFounder />
      <AboutMission />
      <AboutValues />
      <AboutFoodSafety />
      <AboutCTA />
    </>
  );
}
