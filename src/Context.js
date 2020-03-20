import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

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
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}