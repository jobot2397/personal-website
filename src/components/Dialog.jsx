import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";

export const Dialog = ({ isOpen, onClose, title, details }) => {
  const dialogRef = useRef(null);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div
        ref={dialogRef}
        className="bg-white border-1 border-card-border rounded-xl w-md mx-auto overflow-hidden shadow-2xl"
      >
        <div className="p-6">
          <Document
            file="/Resume-UPDATE_THIS.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={0.5} //mobile
            />
          </Document>
          <div className="flex flex-row w-full justify-end gap-2">
            {/* // put in bottom right and less margin/padding */}
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
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
