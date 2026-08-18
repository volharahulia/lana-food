import type { Metadata } from "next";
import StubPage from "../../_components/StubPage";

export const metadata: Metadata = {
  title: "Everyday Menu | Lana Food",
  description: "Delicious homemade meals for any day, from Lana Food.",
};

export default function EverydayMenuPage() {
  return (
    <StubPage title="Everyday Menu" description="Our Everyday Menu is coming soon." />
  );
}
