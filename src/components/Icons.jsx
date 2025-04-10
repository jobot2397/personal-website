import React, { useEffect, useRef, useState } from "react"

export const Icons = ({icons, orientation, maxSize = 80}) => {
    return (
        <div className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} gap-4 items-center justify-center`}>
            {icons.map((icon, index) => {
                return (
                    <div key={index} className="w-20 h-20 flex items-center justify-center">
                        <SVGWithSize 
                            src={icon} 
                            index={index}
                            maxSize={maxSize}
                        />
                    </div>
                )
            })}
        </div>
    )
}

// Component to handle precise SVG sizing
const SVGWithSize = ({ src, index, maxSize }) => {
    const imgRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: maxSize, height: maxSize });
    
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            const { naturalWidth, naturalHeight } = img;
            let width, height;
            if (naturalWidth >= naturalHeight) {
                // Width is the limiting factor
                width = maxSize;
                height = (naturalHeight / naturalWidth) * maxSize;
            } else {
                // Height is the limiting factor
                height = maxSize;
                width = (naturalWidth / naturalHeight) * maxSize;
            }
            
            setDimensions({ width, height });
        };
        
        img.src = src;
    }, [src, maxSize]);

    return (
        <img 
            ref={imgRef}
            src={src} 
            alt={`Icon ${index}`}
            style={{
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`
            }}
        />
    );
}