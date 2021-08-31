import React, { useEffect } from 'react';

import './Home.css';

function Home () {

    useEffect(() => {
        if (!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
        }
    });

    return (
        <main>
            <div>
            <h1 className="title">Work hard anywhere...</h1>
            </div>
            <div className="Home">
                <h2>Bienvenue chez Groupomania</h2>
                <p>Première connexion ?</p>
                <p>Déjà inscrit ?</p>                 
            </div>
        </main>
    )
}

export default Home

//import background from '../../assets/background.jpg';
//<img src={background} style={{width: '100%'}}/>
//<main style={{ backgroundImage:`url(${background})`, width:'100%', height:'600px'}} >  