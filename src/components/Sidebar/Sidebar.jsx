import React from 'react'
import './Sidebar.css'
import Sidebar_up from './SidebarUp'
import Sidebar_down from './SidebarDown'
import { ChevronRightIcon } from "../../theme/Icons";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Sidebar_up />
            <Sidebar_down />
            <div className='buttonClose'>
                <ChevronRightIcon />
            </div>
        </div>
    )
}

export default Sidebar