import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, SetCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    function addImageToCart(img) {
        SetCartItems([...cartItems, img])
    }

    function removeImageFromCart(id) {
        SetCartItems(cartItems.filter(item => item.id !== id))
    }

    console.table(cartItems)

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

    useEffect(() => {
        fetch(url)
            .then(promise => promise.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addImageToCart, cartItems, removeImageFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}