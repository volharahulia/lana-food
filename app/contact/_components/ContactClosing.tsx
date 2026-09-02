import { Heart } from "@phosphor-icons/react/ssr";
import Section from "../../_components/ui/Section";
import { contactClosing } from "../_data/contactConfig";

// Small closing band (CLAUDE.md Contact page decisions) — not a CTA section,
// just a compact decorative sign-off. font-accent (Alex Brush) is the
// Design System's rare decorative-script accent (§18) — this short line is
// exactly that "1-3 word accent moment", not body/UI text. The smallest
// section on the site, so it uses Section's "snug" tier. The inner
// bg-cream-700 solid band is a one-off (no gradient, no border) — this is
// the only consumer of that exact treatment, so it stays literal rather
// than becoming a single-use Surface tone.
export default function ContactClosing() {
  return (
    <Section spacing="snug">
      <div className="flex items-center gap-4 rounded-lg bg-cream-700 px-6 py-6 laptop:px-10">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-white text-primary-600 shadow-xs"
        >
          <Heart size={20} weight="fill" />
        </span>
        <p className="font-accent text-2xl text-primary-600 laptop:text-3xl">
          {contactClosing.message}
        </p>
      </div>
    </Section>
  );
}
