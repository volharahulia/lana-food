// Food Safety & Compliance document registry (ABOUT.md "Food Safety &
// Compliance"). Mirrors the editable-config pattern already used for this
// page (aboutConfig.ts) and for Menu (menuImages.ts): everything specific to
// a document lives here, never hardcoded into AboutFoodSafety.tsx or
// DocumentViewerModal.tsx.
//
// TO REPLACE A DOCUMENT WHEN IT IS RENEWED:
//   1. Overwrite the file at `src` (same filename) with the new PDF/image.
//   2. For a PDF, also regenerate `preview` — a static image of its first
//      page (e.g. open the PDF in a browser, hide the toolbar, screenshot
//      page 1) — and overwrite the existing preview file in place.
//   3. Update `title`/`issuedBy` below only if the official document's own
//      title or issuing authority actually changed.
// No component, layout, or modal change is ever required for a renewal.
//
// Per CLAUDE.md/ABOUT.md: never show expiration dates, validity periods,
// permit numbers, or other time-sensitive metadata on the site — the full
// official document (opened via the modal) is the source of that detail.

export type AboutDocument = {
  id: string;
  title: string;
  issuedBy: string;
  type: "pdf" | "image";
  /** Full-resolution source opened by the modal. */
  src: string;
  /** Static image used for the card thumbnail (for a PDF, a pre-rendered
   * image of its first page — see replacement steps above). */
  preview: string;
  /** Accessible description of the preview — specific to the document, not
   * a generic "image" (ABOUT.md accessibility requirement). */
  previewAlt: string;
  actionLabel: string;
};

export const aboutDocuments: AboutDocument[] = [
  {
    id: "environmental-health-permit",
    title: "Environmental Health Permit",
    issuedBy: "Issued by Santa Clara County Department of Environmental Health",
    type: "pdf",
    src: "/images/about/environmental-health-permit.pdf",
    preview: "/images/about/environmental-health-permit-preview.png",
    previewAlt: "Preview of the Environmental Health Permit issued by Santa Clara County Department of Environmental Health",
    actionLabel: "View Environmental Health Permit",
  },
  {
    id: "servsafe-certification",
    title: "ServSafe Food Protection Manager Certification",
    issuedBy: "Accredited by the ANSI National Accreditation Board (ANAB)",
    type: "image",
    src: "/images/about/servsafe.jpg",
    preview: "/images/about/servsafe.jpg",
    previewAlt: "Preview of the ServSafe Food Protection Manager Certification",
    actionLabel: "View ServSafe Certification",
  },
];
