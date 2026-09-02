import CtaBlock from "../../_components/ui/CtaBlock";
import HeartDivider from "../../_components/ui/HeartDivider";
import { reviewsFinalCta } from "../_data/reviewsConfig";

// Final CTA — thin adapter over the shared CtaBlock's existing "split"
// layout, the exact same pattern already used by Catering's
// CateringFinalCta and About's AboutCTA (red band, HeartDivider decorative
// slot, inverse/ghost buttons, no photo). No Reviews-specific CTA design —
// mirrors those two files' prop shape exactly.
export default function ReviewsFinalCta() {
  return (
    <CtaBlock
      layout="split"
      decorative={<HeartDivider className="text-cream-300" />}
      heading={reviewsFinalCta.heading}
      supportingText={reviewsFinalCta.supportingText}
      primaryCta={{ ...reviewsFinalCta.primaryCta, variant: "inverse" }}
      secondaryCta={{ ...reviewsFinalCta.secondaryCta, variant: "ghost" }}
    />
  );
}
