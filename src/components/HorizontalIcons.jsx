import React, { useEffect, useRef, useState } from "react";

/**
 * SVGImageHorizontalContainer - Displays SVG images horizontally with equal size
 * 
 * @param {Object} props
 * @param {Array} props.icons - Array of imported SVG image files
 * @param {number} props.spacing - Space between icons in pixels (default: 12)
 * @param {string} props.className - Additional classes for the container
 */
export const HorizontalIcons = ({ icons = [], spacing = 12, className = "" }) => {
  const containerRef = useRef(null);
  const [iconSize, setIconSize] = useState(0);
  
  // Calculate icon size based on parent width
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && icons.length > 0) {
        const width = containerRef.current.clientWidth;
        
        // Calculate icon size based on container width and spacing
        // Formula: (Total width - total spacing) / number of icons
        const totalSpacing = (icons.length - 1) * spacing;
        const availableWidth = width - totalSpacing;
        const maxIconSize = Math.floor(availableWidth / icons.length);
        
        setIconSize(maxIconSize > 0 ? maxIconSize : 24); // Use 24px as fallback minimum
      }
    };
    
    // Initial calculation
    updateDimensions();
    
    // Setup resize observer to detect container size changes
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    // Cleanup observer
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [icons.length, spacing]);
  
  return (
    <div 
      ref={containerRef} 
      className={`flex flex-row items-center justify-center w-full h-full ${className}`}
      style={{ gap: `${spacing}px` }}
    >
      {icons.map((imgSrc, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`
          }}
        >
          <img 
            src={imgSrc} 
            alt={`SVG Image ${index}`}
            className="w-full h-full object-contain"
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        </div>
      ))}
    </div>
  );
};
