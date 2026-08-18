import type { Metadata } from "next";
import StubPage from "../_components/StubPage";

export const metadata: Metadata = {
  title: "Customer Reviews | Lana Food | Bay Area California",
  description: "Real customer reviews and event photography from Lana Food celebrations.",
};

export default function ReviewsPage() {
  return (
    <StubPage
      title="Reviews"
      description="Customer reviews and event photography are coming soon."
    />
  );
}
