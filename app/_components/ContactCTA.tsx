import { MapPin, Phone, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import CtaBlock from "./ui/CtaBlock";
import { business } from "../_data/business";
import { contactCtaContent } from "../_data/homeContent";

type ContactMethod = { icon: typeof Phone; label: string; href: string };

// Only channels with a confirmed value render — nothing here is invented or
// shown as a "pending" placeholder. Populate app/_data/business.ts with the
// real phone/WhatsApp/email and these appear automatically.
const contactMethods: ContactMethod[] = [
  business.phone ? { icon: Phone, label: business.phone, href: `tel:${business.phone}` } : null,
  business.whatsapp
    ? { icon: WhatsappLogo, label: "WhatsApp", href: `https://wa.me/${business.whatsapp}` }
    : null,
  business.email
    ? { icon: EnvelopeSimple, label: business.email, href: `mailto:${business.email}` }
    : null,
].filter((method): method is ContactMethod => method !== null);

// Thin adapter over the shared CtaBlock (app/_components/ui/CtaBlock.tsx) —
// this file owns Home's content/data mapping only, not layout.
export default function ContactCTA() {
  return (
    <CtaBlock
      layout="centered"
      heading={contactCtaContent.heading}
      supportingText={contactCtaContent.subtitle}
      primaryCta={{ ...contactCtaContent.cta, variant: "ghost" }}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {contactMethods.map((method) => (
          <a
            key={method.href}
            href={method.href}
            className="flex items-center gap-2 font-body text-sm font-medium text-cream-300 hover:underline"
          >
            <method.icon size={20} aria-hidden />
            {method.label}
          </a>
        ))}
        <span className="flex items-center gap-2 font-body text-sm font-medium text-cream-300">
          <MapPin size={20} aria-hidden />
          {business.serviceArea}
        </span>
      </div>
    </CtaBlock>
  );
}
