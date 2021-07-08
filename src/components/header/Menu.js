import React from 'react'

import './menu.css'

const Menu = () => {
    return (
        <div className="navbar">
           <div className="navbar-left">
            <a className="logo">
                <img src="/src/assets/logo.png" alt=""/>
                    <span>FlowerSpot</span>
            </a>
           </div>
            <div className="navbar-right">
            <ul className="navbar-menu">
                <li><a href="#">Flowers</a></li>
                <li><a href="#">Latest Sightings</a></li>
                <li><a href="#">Favorites</a></li>
                <li className="login"><a href="#">Login</a></li>
                <li className="button"><a href="#">New Account</a></li>
            </ul>
            </div>

        </div>
    )
}

export default Menu