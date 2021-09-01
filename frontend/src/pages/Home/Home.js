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
                <h2>WELCOME <span>to Groupomania</span></h2>
                <a href="/login" className="Home-link">Première connexion ?</a>
                <a href="/register" className="Home-link">Déjà inscrit ?</a>                 
            </div>
        </main>
    )
}

export default Home

//import background from '../../assets/background.jpg';
//<img src={background} style={{width: '100%'}}/>
//<main style={{ backgroundImage:`url(${background})`, width:'100%', height:'600px'}} >  