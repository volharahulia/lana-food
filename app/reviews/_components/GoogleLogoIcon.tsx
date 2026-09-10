type GoogleLogoIconProps = {
  size?: number;
  className?: string;
};

// Google's real multicolor "G" brand mark. Phosphor's GoogleLogo icon is a
// generic monochrome glyph (renders in currentColor, not Google's actual
// brand colors) and the project has no other Google asset, so this is the
// one place that mark is defined — every Google CTA on the Reviews page
// (RatingSummary's badge, GoogleReviewsCta's circular icon) imports this
// instead of duplicating the SVG or falling back to a plain "G".
export default function GoogleLogoIcon({ size = 20, className = "" }: GoogleLogoIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      role="img"
    >
      <path
        fill="#4285F4"
        d="M23.766 12.276c0-.818-.074-1.606-.21-2.364H12.24v4.474h6.482a5.54 5.54 0 0 1-2.402 3.632v3.017h3.887c2.276-2.096 3.559-5.176 3.559-8.759z"
      />
      <path
        fill="#34A853"
        d="M12.24 24c3.24 0 5.956-1.075 7.942-2.907l-3.887-3.017c-1.076.72-2.45 1.147-4.055 1.147-3.12 0-5.762-2.107-6.705-4.938H1.52v3.113A11.997 11.997 0 0 0 12.24 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.535 14.285a7.197 7.197 0 0 1 0-4.57V6.602H1.52a11.998 11.998 0 0 0 0 10.796l4.015-3.113z"
      />
      <path
        fill="#EA4335"
        d="M12.24 4.773c1.763 0 3.346.606 4.591 1.796l3.445-3.445C18.192 1.19 15.477 0 12.24 0 7.577 0 3.548 2.688 1.52 6.602l4.015 3.113c.943-2.831 3.586-4.942 6.705-4.942z"
      />
    </svg>
  );
}
