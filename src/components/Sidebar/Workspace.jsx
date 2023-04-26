import React from 'react'
import SidebarBouton from './SidebarBouton'


const Workspace = () => {
    return (
        <div>
            <h3>Workspace</h3>
            <SidebarBouton src={"../../assets/img/accounts.svg"} titre={"Accounts"} />
            <SidebarBouton src={"../../assets/img/schedule_post.svg"} titre={"Schedule Post"} />
            <SidebarBouton src={"../../assets/img/communities.svg"} titre={"Communities"} />
            <SidebarBouton src={"../../assets/img/analytics.svg"} titre={"Analytics"} />
        </div>
    )
}

export default Workspace