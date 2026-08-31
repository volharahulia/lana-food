import { MapPin, Phone, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import Button from "./ui/Button";
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

export default function ContactCTA() {
  return (
    <section className="container-page py-10 laptop:py-16">
      <div className="flex flex-col items-center gap-5 rounded-lg bg-primary-600 px-6 py-10 text-center text-cream-300 laptop:px-12 laptop:py-12">
        <h2 className="font-display text-2xl font-medium laptop:text-[32px]">
          {contactCtaContent.heading}
        </h2>
        <p className="max-w-xl font-body text-base text-cream-300/90 laptop:text-lg">
          {contactCtaContent.subtitle}
        </p>

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

        <Button href={contactCtaContent.cta.href} variant="ghost" size="lg">
          {contactCtaContent.cta.label}
        </Button>
      </div>
    </section>
  );
}
