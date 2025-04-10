import React, { useEffect, useRef, useState } from "react";

/**
 * SVGImageContainer - Displays SVG images vertically with equal size
 * 
 * @param {Object} props
 * @param {Array} props.icon - Array of imported SVG image files
 * @param {number} props.spacing - Space between images in pixels (default: 12)
 * @param {string} props.className - Additional classes for the container
 */
export const VerticalIcons = ({ icons = [], spacing = 12}) => {
  const containerRef = useRef(null);
  const [iconSize, setIconSize] = useState(0);
  
  // Calculate icon size based on parent height
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && icons.length > 0) {
        const height = containerRef.current.clientHeight;
        
        // Calculate icon size based on container height and spacing
        // Formula: (Total height - total spacing) / number of icons
        const totalSpacing = (icons.length - 1) * spacing;
        const availableHeight = height - totalSpacing;
        const maxIconSize = Math.floor(availableHeight / icons.length);
        
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
      className={`flex flex-col items-center justify-center w-full h-full`}
      style={{ gap: `${spacing}px` }}
    >
      {icons.map((icon, index) => (
        <div 
          key={index} 
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`
          }}
        >
          <img 
            src={icon} 
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

/**
 * Usage example:
 * 
 * import Icon1 from './assets/icon1.svg';
 * import Icon2 from './assets/icon2.svg';
 * 
 * const svgImages = [Icon1, Icon2, Icon3];
 * 
 * <div style={{ height: '500px', width: '100px' }}>
 *   <SVGImageContainer images={svgImages} spacing={16} />
 * </div>
 */