import React from 'react'
import MainMenu from './MainMenu'
import Workspace from './Workspace'
import General from './General'

const Sidebar_up = () => {
    return (
        <div className='sidebar_up'>
            <div className='logo_container'>
                <img src="../../assets/img/logo.svg" alt="" />
                <h2>Dash</h2>
            </div>
            <div className='sidebar_up_gap'>
                <MainMenu />
            </div>
            <div className='sidebar_up_gap'>
                <Workspace />
            </div>
            <div className='sidebar_up_gap'>
                <General />
            </div>
        </div>
    )
}

export default Sidebar_up