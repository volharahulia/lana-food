import type { Metadata } from "next";
import StubPage from "../_components/StubPage";

export const metadata: Metadata = {
  title: "Contact Lana Food | Homemade Catering | Bay Area California",
  description: "Get in touch with Lana Food to plan your celebration.",
};

export default function ContactPage() {
  return (
    <StubPage
      title="Contact"
      description="Direct contact options for Lana Food are coming soon."
    />
  );
}
