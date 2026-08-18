import type { Metadata } from "next";
import StubPage from "../_components/StubPage";

export const metadata: Metadata = {
  title: "Catering Services | Lana Food | Bay Area California",
  description:
    "Homemade catering for birthdays, baby showers, family gatherings, and holiday celebrations across the San Francisco Bay Area.",
};

export default function CateringPage() {
  return (
    <StubPage
      title="Catering"
      description="Details on our catering services and how to request a quote are coming soon."
    />
  );
}
