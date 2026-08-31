// Confirmed business facts only. Unconfirmed contact/social channels are left
// `null` so components can conditionally hide them instead of inventing or
// displaying placeholder text. Fill in the real value here when available —
// no component changes are required.
export const business = {
  name: "Lana Food",
  // Single source of truth for the logo asset — Header, Footer, and
  // MenuPhoto's fallback all render whatever this points to; none of them
  // hardcode the filename themselves (see the About page image-editability
  // audit: a same-filename asset swap must work without touching a
  // presentation component).
  logo: "/images/common/logo.PNG",
  location: "Mountain View, California",
  serviceArea: "San Francisco Bay Area, California",
  phone: "+16505371182",
  whatsapp: "+16505371182",
  email: null as string | null,
  instagram: "https://www.instagram.com/lana_s_food/",
  facebook: "https://www.facebook.com/LanaFoodCatering/",
  googleBusinessProfile: null as string | null,
  // Two separate, independently-editable Google Maps values — never derive
  // one from the other (see app/contact/_components/MapPreview.tsx):
  //
  // googleMapsUrl: the public Lana Food Google Maps listing (any real link
  // to it works, including a shortened maps.app.goo.gl share link — it's
  // only ever used as an outbound <a href>, never as an iframe src). Powers
  // "View on Google Maps" and the clickable map/location card.
  //
  // googleMapsEmbedUrl: the official embeddable URL from Google Maps ->
  // Share -> Embed a map -> Copy HTML (the src="..." value from that
  // snippet). Used ONLY as the map preview iframe's src.
  //
  // Either can be left `null` independently — the map preview falls back to
  // a static location card rather than inventing a URL.
  googleMapsUrl: "https://maps.app.goo.gl/Y6ErK7C1tLthnozKA",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.3329697715417!2d-122.1154093246679!3d37.40560403334077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb13f05f5efe1%3A0xa83a76ef9b6b4a12!2sLana%20European%20Food!5e0!3m2!1sen!2spl!4v1788042056574!5m2!1sen!2spl",
};
