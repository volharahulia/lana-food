"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import type { AboutDocument } from "../_data/aboutDocuments";

type DocumentViewerModalProps = {
  document: AboutDocument | null;
  onOpenChange: (open: boolean) => void;
};

// One focused, reusable dialog for both document types (ABOUT.md "Food
// Safety & Compliance") rather than a separate modal per document. Radix
// Dialog (same primitive as MenuCardModal.tsx) already provides the required
// focus trap, Escape-to-close, backdrop click-to-close, and return-focus-on-
// close behavior, so none of that is reimplemented here.
export default function DocumentViewerModal({ document, onOpenChange }: DocumentViewerModalProps) {
  return (
    <Dialog.Root open={document !== null} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-900/50 data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg bg-surface-white shadow-lg">
          {document && (
            <>
              <div className="flex items-center justify-between gap-4 border-b border-border-hairline p-4 tablet:p-6">
                <Dialog.Title className="font-display text-lg font-medium text-ink-900 tablet:text-xl">
                  {document.title}
                </Dialog.Title>
                <Dialog.Close
                  aria-label="Close"
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-ink-700 hover:text-primary-600"
                >
                  <X size={22} aria-hidden />
                </Dialog.Close>
              </div>

              <div className="flex flex-1 items-center justify-center overflow-auto bg-cream-500 p-4 tablet:p-6">
                {document.type === "image" ? (
                  // Full-resolution document of unknown/variable intrinsic size,
                  // fit within the available space without cropping — the
                  // fixed-dimension next/image (fill or width/height) contract
                  // doesn't fit this case, unlike the site's decorative photography.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={document.src}
                    alt={document.previewAlt}
                    className="max-h-full max-w-full rounded-md object-contain"
                  />
                ) : (
                  <iframe
                    src={document.src}
                    title={document.title}
                    className="h-[70vh] w-full rounded-md border border-border-hairline bg-surface-white"
                  />
                )}
              </div>

              <div className="flex items-center justify-end border-t border-border-hairline p-4 tablet:p-6">
                <a
                  href={document.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-primary-600 hover:underline"
                >
                  Open in a new tab
                </a>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
