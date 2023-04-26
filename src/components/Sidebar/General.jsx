import React from 'react'
import SidebarBouton from './SidebarBouton'

const General = () => {
    return (
        <div>
            <h3>General</h3>
            <SidebarBouton src={"../../assets/img/files_and_folders.svg"} titre={"File & Folders"} />
            <SidebarBouton src={"../../assets/img/settings.svg"} titre={"Settings"} notification={100} />
        </div>
    )
}

export default General