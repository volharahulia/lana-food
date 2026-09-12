import type { Metadata, Viewport } from "next";
import { Fraunces, Karla, Alex_Brush } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import MobileCTABar from "./_components/MobileCTABar";
import BackToTop from "./_components/BackToTop";
import { business } from "./_data/business";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex-brush",
  display: "swap",
});

// viewportFit "cover" lets the page draw edge-to-edge on notch/home-indicator
// devices, which is what makes env(safe-area-inset-*) resolve to a real value
// below (MobileCTABar.tsx, BackToTop.tsx) instead of 0 — never disables zoom.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Lana Food | Homemade Eastern European Catering | San Francisco Bay Area",
  description:
    "Fresh homemade Eastern European catering for birthdays, family gatherings, baby showers, holiday celebrations, and kids' parties across the San Francisco Bay Area.",
};

// Sitewide LocalBusiness schema — the single source of structured business
// data for the whole site (do not add a second LocalBusiness block on any
// individual page, e.g. Contact; extend this one instead). Optional fields
// are included only when business.ts has a confirmed value, never invented.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lana Food",
  description:
    "Family-owned catering business rooted in authentic Eastern European homemade cooking, serving the San Francisco Bay Area.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mountain View",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: business.serviceArea,
  ...(business.phone ? { telephone: business.phone } : {}),
  ...(business.email ? { email: business.email } : {}),
  ...(business.instagram || business.facebook
    ? { sameAs: [business.instagram, business.facebook].filter(Boolean) }
    : {}),
  ...(business.phone
    ? {
        contactPoint: {
          "@type": "ContactPoint",
          telephone: business.phone,
          contactType: "customer service",
          areaServed: business.serviceArea,
        },
      }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${karla.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink-900 bg-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
        <BackToTop />
      </body>
    </html>
  );
}
