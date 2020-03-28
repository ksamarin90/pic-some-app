import React, {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHook from "../hooks/useHover"

function Image({className, img}) {
    const [hovered, ref] = useHook()

    const {toggleFavorite, addImageToCart, cartItems, removeImageFromCart} = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }
    
    function cartIcon() {
        const isNewItem = !cartItems.some(item => item.id === img.id)
        if (isNewItem && hovered) {
            return <i onClick={() => addImageToCart(img)} className="ri-add-circle-line cart"></i>
        } else if (!isNewItem) {
            return <i onClick={() => removeImageFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        }
    }

    return (
        <div 
            ref={ref} 
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt="" />
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image