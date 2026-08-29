import { Heart } from "@phosphor-icons/react/ssr";
import { contactClosing } from "../_data/contactConfig";

// Small closing band (CLAUDE.md Contact page decisions) — not a CTA section,
// just a compact decorative sign-off. font-accent (Alex Brush) is the
// Design System's rare decorative-script accent (§18) — this short line is
// exactly that "1-3 word accent moment", not body/UI text.
export default function ContactClosing() {
  return (
    <section className="container-page py-8 laptop:py-10">
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
    </section>
  );
}
