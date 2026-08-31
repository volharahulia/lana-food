import type { Metadata } from "next";
import CateringHero from "./_components/CateringHero";
import CateringSpecialFeatures from "./_components/CateringSpecialFeatures";
import CateringEventTypes from "./_components/CateringEventTypes";
import CateringProcessService from "./_components/CateringProcessService";
import CateringDelivery from "./_components/CateringDelivery";
import CateringFinalCta from "./_components/CateringFinalCta";

export const metadata: Metadata = {
  title: "Catering Services | Lana Food | Bay Area California",
  description:
    "Homemade Eastern European catering for birthdays, celebrations, and family gatherings in the San Francisco Bay Area. Professional setup, beautiful presentation, and fresh ingredients.",
};

export default function CateringPage() {
  return (
    <>
      <CateringHero />
      <CateringSpecialFeatures />
      <CateringEventTypes />
      <CateringProcessService />
      <CateringDelivery />
      <CateringFinalCta />
    </>
  );
}
