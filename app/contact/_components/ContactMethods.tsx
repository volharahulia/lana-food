import { Phone, WhatsappLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react/ssr";
import { business } from "../../_data/business";
import { contactMethodsCopy } from "../_data/contactConfig";

type MethodEntry = {
  key: string;
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  description?: string;
};

// Display-only transform of a business.ts profile URL — strips the scheme
// and "www." and a trailing slash so the real URL reads like a handle
// (e.g. "https://www.instagram.com/foo/" -> "instagram.com/foo"). The href
// still uses the untouched business.ts value; this never stores or invents
// a second copy of it.
function formatProfileUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

// Only methods with confirmed data in business.ts render — never invented
// contact info (CLAUDE.md §16 / Contact page decisions). Populate the
// matching business.ts field and the method appears automatically.
const methods: (MethodEntry | null)[] = [
  business.phone
    ? {
        key: "phone",
        icon: Phone,
        label: contactMethodsCopy.phone.label,
        value: business.phone,
        href: `tel:${business.phone}`,
        description: contactMethodsCopy.phone.description,
      }
    : null,
  business.whatsapp
    ? {
        key: "whatsapp",
        icon: WhatsappLogo,
        label: contactMethodsCopy.whatsapp.label,
        value: contactMethodsCopy.whatsapp.linkLabel,
        href: `https://wa.me/${business.whatsapp}`,
        description: contactMethodsCopy.whatsapp.description,
      }
    : null,
  business.instagram
    ? {
        key: "instagram",
        icon: InstagramLogo,
        label: contactMethodsCopy.instagram.label,
        value: formatProfileUrl(business.instagram),
        href: business.instagram,
      }
    : null,
  business.facebook
    ? {
        key: "facebook",
        icon: FacebookLogo,
        label: contactMethodsCopy.facebook.label,
        value: formatProfileUrl(business.facebook),
        href: business.facebook,
      }
    : null,
];

const activeMethods = methods.filter((method): method is MethodEntry => method !== null);

export default function ContactMethods() {
  if (activeMethods.length === 0) return null;

  return (
    <ul className="flex flex-col divide-y divide-border-hairline">
      {activeMethods.map(({ key, icon: Icon, label, value, href, description }) => (
        <li key={key} className="flex gap-4 py-5 first:pt-0 last:pb-0">
          <span
            aria-hidden
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600"
          >
            <Icon size={20} />
          </span>
          <div className="flex flex-col items-start gap-1">
            <span className="font-body text-sm font-semibold text-ink-900">{label}</span>
            <a
              href={href}
              className="font-body text-base font-semibold text-primary-600 hover:underline"
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {value}
            </a>
            {description && (
              <p className="font-body text-sm text-ink-700">{description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
