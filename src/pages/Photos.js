import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils/index"



function Photos() {
    const {allPhotos} = useContext(Context)
    
    const images = allPhotos.map((image, i) => (
        <Image key={image.id} img={image} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos