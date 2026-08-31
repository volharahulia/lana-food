import HeartDivider from "../../_components/ui/HeartDivider";
import { contactIntro } from "../_data/contactConfig";

// Compact editorial page introduction — deliberately not a Hero (CLAUDE.md:
// Contact has no hero section/large photo). Sole <h1> on this page, sized to
// the Design System's general content-page H1 (56/64 desktop, 34/40 mobile,
// §3.3 Type Scale) rather than the Home/Menu Hero's own tuned two-column
// scale, since there's no hero composition here to match.
export default function ContactIntro() {
  return (
    <section className="container-page pt-10 pb-2 text-center laptop:pt-16">
      <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
        {contactIntro.eyebrow}
      </p>

      <HeartDivider className="mt-3 justify-center text-primary-600" />

      <h1 className="mt-4 font-display text-[34px] font-semibold leading-[40px] tracking-[-0.5px] text-ink-900 laptop:text-[56px] laptop:leading-[64px]">
        {contactIntro.h1}
      </h1>

      <p className="mx-auto mt-4 max-w-xl font-body text-base leading-[1.6] text-ink-700 laptop:text-lg">
        {contactIntro.intro}
      </p>
    </section>
  );
}
