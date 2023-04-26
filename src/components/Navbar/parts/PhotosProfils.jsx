import React from 'react'
import './PhotosProfils.css'
import PhotoProfil from './PhotoProfil'

const PhotosProfils = () => {
    return (
        <div className="people_connect">
            <PhotoProfil src={"../../assets/img/goku.jpg"}
                styleProps={{
                    left: "0px",
                    zIndex: 5
                }}
            />
            <PhotoProfil src={"../../assets/img/vegeta.jpg"}
                styleProps={{
                    left: "21px",
                    zIndex: 4
                }}
            />
            <PhotoProfil src={"../../assets/img/trunks.jpg"}
                styleProps={{
                    left: "42px",
                    zIndex: 3
                }}
            />
            <PhotoProfil src={"../../assets/img/bardock.jpg"}
                styleProps={{
                    left: "63px",
                    zIndex: 2
                }}
            />
        </div>
    )
}

export default PhotosProfils