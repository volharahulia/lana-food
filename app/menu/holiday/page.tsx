import type { Metadata } from "next";
import StubPage from "../../_components/StubPage";

export const metadata: Metadata = {
  title: "Holiday Menu | Lana Food",
  description: "Traditional homemade dishes for holidays & special occasions, from Lana Food.",
};

export default function HolidayMenuPage() {
  return <StubPage title="Holiday Menu" description="Our Holiday Menu is coming soon." />;
}
