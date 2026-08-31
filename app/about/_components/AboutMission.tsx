import HeartDivider from "../../_components/ui/HeartDivider";
import { aboutMission } from "../_data/aboutConfig";

// Section 2 — Our Mission. Centered editorial statement, not a card.
export default function AboutMission() {
  return (
    <section className="bg-cream-500 pt-10 pb-6 laptop:pt-16 laptop:pb-10">
      <div className="container-page flex flex-col items-center gap-3 text-center">
        <h2 className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
          {aboutMission.eyebrow}
        </h2>
        <HeartDivider className="justify-center text-primary-600" />
        <p className="max-w-3xl font-display text-2xl font-medium leading-[1.35] text-ink-900 laptop:text-[32px] laptop:leading-[1.3]">
          {aboutMission.statement}
        </p>
      </div>
    </section>
  );
}
