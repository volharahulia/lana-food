import type { Metadata } from "next";
import StubPage from "../_components/StubPage";

export const metadata: Metadata = {
  title: "About Lana Food | Family-Owned Homemade Catering | Bay Area California",
  description:
    "Meet Lana and the family behind Lana Food's authentic Eastern European homemade cooking.",
};

export default function AboutPage() {
  return (
    <StubPage
      title="About"
      description="Lana's story, our values, and frequently asked questions are coming soon."
    />
  );
}
