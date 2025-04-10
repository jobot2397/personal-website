import React from "react"

export const Icon = ({src}) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <img
                src={src}
                alt="Icon"
                className="w-full h-full object-contain"
            />
        </div>
    )
}