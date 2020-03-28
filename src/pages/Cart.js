import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")

    const {cartItems, emptyCart} = useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = cartItems.reduce((acc, itemCost) => acc += 5.99, 0)
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            emptyCart()
            setButtonText("Place Order")
        }, 3000)
    }

    return (
        <main className="cart-page">
            {cartItemElements}
            {
                cartItems.length > 0 ?
                    <>
                        <p className="total-cost">Total: {totalCostDisplay}</p>
                        <div className="order-button">
                            <button onClick={() => placeOrder()}>{buttonText}</button>
                        </div>
                    </> :
                    <h2 className="emptyCart">You have no items in the cart.</h2>
            }
        </main>
    )
}

export default Cart