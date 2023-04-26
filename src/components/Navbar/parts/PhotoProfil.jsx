import React from 'react'
import './PhotoProfil.css'

const PhotoProfil = ({ src, styleProps }) => {
    return (
        <div className='photo_profil_container'
            style={{
                ...styleProps,
                border: "2px solid white"
            }}
        >
            <img className='photo_profil' src={src} alt="" />
        </div>
    )
}

export default PhotoProfil