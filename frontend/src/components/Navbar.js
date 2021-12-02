import React, { useState } from 'react';
//import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-black-400x66.png';
import './Navbar.css';

function Navbar() {

    //const [loggedIn, setLoggedIn] = useState(true);

    /*useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
        console.log(loggedIn);
    }, [localStorage.getItem('loggedIn')]);*/


    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    console.log(showMenu)

    return (
        <nav className={`Navbar ${showMenu ? "Show-nav" : "Hide-nav"}`}>
            <div className="Logo">
                <img src={logo} alt="Logo" width="200px" height="auto" />
            </div>
            <ul className="Navbar__links">
                <li className="Navbar__item">
                    <a href="/">Accueil</a>      
                </li>
                <li className="Navbar__item">
                    <a href="/profile">Mon Profil</a>
                </li>
                <li className="Navbar__item">
                    <a href="/article">Actualités</a>
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

export default Navbar;

/*  TEST GESTION DES ONGLETS DU MENU SI CONNECTE AU COMPTE TRUE or FALSE
Faire des recherches sur useHistory
            <ul className="Navbar__links">
                <li className="Navbar__item">
                    <a href="/">Accueil</a>
                </li>
                {loggedIn ? (
                    <>
                        <a href="/article">Actualités</a>
                    </>
                ) : (
                    <>                
                    <li className="Navbar__item">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="Navbar__item">
                        <a href="/login">Connexion</a>
                    </li>
                    <li className="Navbar__item">
                        <a href="/register">S'inscrire</a>
                    </li>
                    </>
                )}
            </ul>
*/