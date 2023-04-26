import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { left } from '../../mesure/mesure'

const Layout = () => {
    return (
        <div>
            <Navbar left={left} />
            <Sidebar />
            <div style={{ marginLeft: left }}>
                <Outlet />
            </div>

        </div>
    )
}

export default Layout