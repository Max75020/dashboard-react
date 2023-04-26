import React from 'react'
import SidebarBouton from './SidebarBouton'

const MainMenu = () => {
    return (
        <div>
            <h3>MAIN MENU</h3>
            <SidebarBouton src={"../../assets/img/dashboard.svg"} titre={"Dashboard"} />
            <SidebarBouton src={"../../assets/img/inbox.svg"} titre={"Inbox"} notification={1} />
        </div>
    )
}

export default MainMenu