import React from 'react'
import { Link } from 'react-router-dom'

const SidebarBouton = ({ src, titre, notification }) => {
    return (
        <div>
            <Link />
            <div className={`menu-content`}>
                <div className={`left`}>
                    <img src={src} alt="" />
                    <h4>{titre}</h4>
                </div>
                {notification && <div className="notification">{notification}</div>}
            </div>
            <Link />
        </div>
    )
}

export default SidebarBouton