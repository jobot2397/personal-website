import React, { useState } from 'react';
import { Dialog } from './Dialog';

// Component for each feature box
export const Card = ({ title, icon, size, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate size classes
  const getSizeClass = () => {
    switch(size) {
      case 'small': return 'col-span-1 row-span-1';
      case 'wide': return 'col-span-2 row-span-1';
      case 'tall': return 'col-span-1 row-span-2';
      case 'large': return 'col-span-2 row-span-2';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <>
      <div 
        className={`${getSizeClass()} bg-card-bg hover:bg-card-border border-1 border-card-border relative rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center h-full w-full`}
        onClick={() => setIsOpen(true)}
      >
        {icon}
      </div>

       {/* Dialog Component */}
       <Dialog 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        details={details}
      />
    </>
  );
};