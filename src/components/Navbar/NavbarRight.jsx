import React from 'react'
import BarreV from '../Navbar/parts/BarreV'
import Status from '../Navbar/parts/Status'
import PhotosProfils from '../Navbar/parts/PhotosProfils'
import Notification from './parts/Notification'

const NavbarRight = () => {
    return (
        <div className='navbar_right'>
            <Status />
            <PhotosProfils />
            <BarreV margin={"0px 29px 0px 22px"} />
            <Notification notification={true} />
        </div>
    )
}

export default NavbarRight