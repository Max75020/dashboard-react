import React from 'react'
import BarreV from '../Navbar/parts/BarreV'
import Search from './parts/Search'

const NavbarLeft = () => {
    return (
        <div className='navbar_left'>
            <div className="profil">
                <div className='photos'>
                    <img id='profil_photo' src="../../assets/img/gohan.jpg" alt="" />
                </div>
                <div className='textes'>
                    <h5>Erza Miller</h5>
                    <p>erza.miller@email.com</p>
                </div>
                <div className='bouton'>
                    <img src="../../assets/img/fleche_bas.svg" alt="" />
                </div>
            </div>
            <BarreV margin={"0px 29px 0px 22px"} />
            <Search />
        </div>
    )
}

export default NavbarLeft