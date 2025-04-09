import React, { useState, useEffect, useRef } from 'react';

export const Dialog = ({ isOpen, onClose, title, details }) => {
  const dialogRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div 
        ref={dialogRef} 
        className="bg-card-bg border-1 border-card-border rounded-xl max-w-lg w-full mx-auto overflow-hidden shadow-2xl"
      >
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <div className="text-gray-300 prose prose-invert max-w-none">
            {details}
          </div>
        </div>
      </div>
    </div>
  );
};