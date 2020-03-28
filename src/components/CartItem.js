import React, {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeImageFromCart} = useContext(Context)

    const deleteBinClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i ref={ref} className={deleteBinClassName} onClick={() => removeImageFromCart(item.id)}></i>
            <img src={item.url} width="130px" alt="" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem