import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";

export const Dialog = ({ isOpen, onClose, title, details }) => {
  const dialogRef = useRef(null);
  const [pdfScale, setPdfScale] = useState(1);

  useEffect(() => {
    if (window.screen.width < 768) {
     setPdfScale(0.5)
    } else {
      setPdfScale(1)
    }
  }, [])

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div
        ref={dialogRef}
        className="bg-white border-1 border-card-border rounded-xl w-md sm:w-fit mx-auto overflow-hidden shadow-2xl"
      >
        <div className="p-6">
          <Document
            file="/Resume.pdf"
          >
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={pdfScale} //mobile
            />
          </Document>
          
          <a href="/Resume.pdf" download class="button">
            <div className="flex flex-row w-full gap-2 border-border py-2 bg-black/55 text-primary-white border-2 rounded-2xl justify-center">
            Download
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg></div>
          </a>
          
        </div>
      </div>
    </div>
  );
};
