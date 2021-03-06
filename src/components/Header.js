import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {

    const {cartItems} = useContext(Context)

    const cartClassName = cartItems.length === 0 ? "ri-shopping-cart-line" : "ri-shopping-cart-fill"

    return (
        <header>
            <Link to="/pic-some-app">
                <h2>Pic Some</h2>
            </Link>
            
            <Link to="/pic-some-app/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header