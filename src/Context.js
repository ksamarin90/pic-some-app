import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    function addImageToCart(img) {
        setCartItems([...cartItems, img])
    }

    function removeImageFromCart(id) {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map((photo) => {
            if (id === photo.id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite 
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function emptyCart() {
        setCartItems([])
    }

    useEffect(() => {
        fetch(url)
            .then(promise => promise.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            addImageToCart, 
            cartItems, 
            removeImageFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}