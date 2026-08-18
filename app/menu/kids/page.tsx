import type { Metadata } from "next";
import StubPage from "../../_components/StubPage";

export const metadata: Metadata = {
  title: "Kids' Menu | Lana Food",
  description: "Tasty & wholesome homemade options kids will love, from Lana Food.",
};

export default function KidsMenuPage() {
  return <StubPage title="Kids' Menu" description="Our Kids' Menu is coming soon." />;
}
