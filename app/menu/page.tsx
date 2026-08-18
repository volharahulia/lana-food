import type { Metadata } from "next";
import StubPage from "../_components/StubPage";

export const metadata: Metadata = {
  title: "Lana Food Menu | Homemade Eastern European Food | Bay Area California",
  description:
    "Browse Lana Food's Holiday, Everyday, and Kids' menus of homemade Eastern European dishes.",
};

export default function MenuPage() {
  return (
    <StubPage
      title="Menu"
      description="Our full Holiday, Everyday, and Kids' menus are coming soon."
    />
  );
}
