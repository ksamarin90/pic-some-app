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
                <Route exact path="/pic-some-app">
                    <Photos />
                </Route>

                <Route path="/pic-some-app/cart">
                    <Cart />
                </Route>
            </Switch>

        </div>
    )
}

export default App