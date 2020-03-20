import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, img}) {

    const {toggleFavorite} = useContext(Context)

    const [hovered, SetHovered] = useState(false)
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    const heartIcon = hovered && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
    const favoritedHeartIcon = <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>

    return (
        <div 
            onMouseEnter={() => SetHovered(true)}
            onMouseLeave={() => SetHovered(false)} 
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt="" />
            {img.isFavorite ? favoritedHeartIcon : heartIcon}
            {cartIcon}

        </div>
    )
}

export default Image