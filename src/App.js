import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Route, Switch} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
        
            <Switch>
                <Route exact path="https://ksamarin90.github.io/pic-some-app/">
                    <Photos />
                </Route>

                <Route path="https://ksamarin90.github.io/pic-some-app/cart">
                    <Cart />
                </Route>
            </Switch>

        </div>
    )
}

export default App