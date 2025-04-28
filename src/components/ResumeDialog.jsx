import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import posthog from "posthog-js";

export default function ResumeDialog({ setIsOpen }) {
  const [pdfScale, setPdfScale] = useState(1);

  // Set pdf scale based on mobile or desktop
  useEffect(() => {
    // Arbitrary width based on tablet screen size
    if (window.screen.width < 768) {
      setPdfScale(0.5);
    } else {
      setPdfScale(1);
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-md sm:w-fit mx-auto overflow-hidden shadow-2xl p-2">
        <div className="flex justify-end w-full">
          <div
            className="rounded-full p-1 hover:bg-black/55 hover:text-primary-white"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="size-8" />
          </div>
        </div>
        <Document file="/Resume.pdf">
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={pdfScale}
          />
        </Document>
        <a href="/Resume.pdf" download class="button" onClick={() => {posthog?.capture("Resume Downloaded")}}>
          <div className="flex flex-row w-full gap-2 border-border py-2 bg-black/55 hover:bg-black/75 text-primary-white border-2 rounded-2xl justify-center">
            Download
            <ArrowDownTrayIcon className="size-6" />
          </div>
        </a>
      </div>
    </div>
  );
}
