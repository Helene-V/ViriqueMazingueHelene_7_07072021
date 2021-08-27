import React, { useState } from 'react';
import logo from '../assets/logo.png'
import './Navbar.css';

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    console.log(showMenu)

    return(
        <nav className={`Navbar ${showMenu ? "Show-nav" : "Hide-nav"}`}>
            <div className="Logo">
                <img src={logo} alt="Logo" width="200px" height="auto" />
            </div>
            <ul className="Navbar__links">
                <li className="Navbar__item">
                    <a href="/">Accueil</a>
                </li>
                <li className="Navbar__item">
                    <a href="/login">Connexion</a>
                </li>
                <li className="Navbar__item">
                    <a href="/register">S'inscrire</a>
                </li>
            </ul>
            <button
                className="Navbar__burger"
                onClick={handleShowMenu}>
                <span className="Burger-bar"></span>
            </button>
        </nav>
    )
}

export default Navbar