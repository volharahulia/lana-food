import CtaBlock from "../../_components/ui/CtaBlock";
import HeartDivider from "../../_components/ui/HeartDivider";
import { aboutCta } from "../_data/aboutConfig";

// Thin adapter over the shared CtaBlock (app/_components/ui/CtaBlock.tsx) —
// this file owns About's content/data mapping only, not layout.
export default function AboutCTA() {
  return (
    <CtaBlock
      layout="split"
      decorative={<HeartDivider className="text-cream-300" />}
      heading={aboutCta.headline}
      supportingText={aboutCta.supportText}
      primaryCta={{ ...aboutCta.primaryCta, variant: "inverse" }}
      secondaryCta={{ ...aboutCta.secondaryCta, variant: "ghost" }}
    />
  );
}
