import React from  'react';
import './Navbar.css';

function Navbar() {
    return(
        <div className="Navbar">
            <a href="/">Accueil</a>
            <a href="/login">Connexion</a>
            <a href="/register">S'inscrire</a>
        </div>
    )
}

export default Navbar