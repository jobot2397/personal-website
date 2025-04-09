import React from "react"

export const Icons = ({icons, orientation}) => {
    return (
        <div className={`${orientation == 'vertical' ? 'flex-col' : 'flex-row'} flex gap-4 justify-items-center`}>
            {icons.map((icon) => {
                return (
                    <div className="w-20 h-20 content-center justify-items-center">
                        <img src={icon} style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}/>
                    </div>
                )
            })}
        </div>
    )
}