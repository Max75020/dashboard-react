import React from 'react'
import './Navbar.css'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'

const Navbar = ({ left }) => {
    return (
        <div style={{ marginLeft: left }} className='navbar'>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}

export default Navbar