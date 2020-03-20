import React, {useState} from "react"

function Image({className, img}) {

    const [hovered, SetHovered] = useState(false)

    console.log(hovered)

    return (
        <div 
            onMouseEnter={() => SetHovered(true)}
            onMouseLeave={() => SetHovered(false)} 
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt="" />
        </div>
    )
}

export default Image