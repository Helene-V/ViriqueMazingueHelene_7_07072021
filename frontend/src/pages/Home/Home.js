import React, { useEffect } from 'react';

import './Home.css'

function Home () {

    useEffect(() => {
        if (!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
        }
    });

    return (
        <div className="Home">
            <h1>Bienvenue chez Groupomania</h1>
        </div>
    )
}

export default Home