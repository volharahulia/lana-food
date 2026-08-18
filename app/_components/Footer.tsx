import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  MapPin,
} from "@phosphor-icons/react/ssr";
import { business } from "../_data/business";
import { menuDropdown, MULTILINGUAL_ENABLED } from "../_data/navigation";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const hasSocial = business.instagram || business.facebook;

  return (
    <footer className="bg-cream-700 pb-28 laptop:pb-0">
      <div className="mx-auto max-w-[1400px] px-4 py-10 tablet:px-6 laptop:px-8 laptop:py-14 desktop:px-12">
        <div className="flex flex-col gap-8 tablet:grid tablet:grid-cols-3 tablet:gap-8">
          <div className="flex flex-col gap-4">
            <div className="relative h-11 w-[74px]">
              <Image
                src="/images/common/logo.PNG"
                alt="Lana Food"
                fill
                sizes="74px"
                className="object-cover object-center"
              />
            </div>
            <p className="font-body text-sm text-ink-700">
              Homemade with love in the San Francisco Bay Area
            </p>
          </div>

          <nav aria-label="Pages">
            <h2 className="font-body text-xs font-semibold uppercase tracking-[1.5px] text-ink-500">
              Pages
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-ink-700 hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Menu quick links">
            <h2 className="font-body text-xs font-semibold uppercase tracking-[1.5px] text-ink-500">
              Menu Quick Links
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {menuDropdown.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-ink-700 hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-border-strong pt-6 tablet:flex-row tablet:items-center tablet:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2 font-body text-sm text-ink-700 hover:text-primary-600"
              >
                <Phone size={18} aria-hidden />
                {business.phone}
              </a>
            )}
            {business.whatsapp && (
              <a
                href={`https://wa.me/${business.whatsapp}`}
                className="flex items-center gap-2 font-body text-sm text-ink-700 hover:text-primary-600"
              >
                <WhatsappLogo size={18} aria-hidden />
                WhatsApp
              </a>
            )}
            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 font-body text-sm text-ink-700 hover:text-primary-600"
              >
                <EnvelopeSimple size={18} aria-hidden />
                {business.email}
              </a>
            )}
            <span className="flex items-center gap-2 font-body text-sm text-ink-700">
              <MapPin size={18} aria-hidden />
              {business.serviceArea}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {hasSocial && (
              <div className="flex items-center gap-3">
                {business.instagram && (
                  <a
                    href={business.instagram}
                    aria-label="Lana Food on Instagram"
                    className="text-ink-700 hover:text-primary-600"
                  >
                    <InstagramLogo size={22} aria-hidden />
                  </a>
                )}
                {business.facebook && (
                  <a
                    href={business.facebook}
                    aria-label="Lana Food on Facebook"
                    className="text-ink-700 hover:text-primary-600"
                  >
                    <FacebookLogo size={22} aria-hidden />
                  </a>
                )}
              </div>
            )}
            {MULTILINGUAL_ENABLED && (
              <div className="flex items-center gap-2 font-body text-sm text-ink-700">
                <button className="font-semibold text-primary-600">EN</button>
                <span aria-hidden>|</span>
                <button>RU</button>
              </div>
            )}
          </div>
        </div>

        {business.googleBusinessProfile && (
          <a
            href={business.googleBusinessProfile}
            className="mt-4 inline-block font-body text-sm text-primary-600 hover:underline"
          >
            View our Google Business Profile
          </a>
        )}

        <p className="mt-6 font-body text-xs text-ink-500">
          © {new Date().getFullYear()} Lana Food. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
