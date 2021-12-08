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
            <div className="Home">
                <h1>WELCOME <span>to Groupomania</span></h1>
                <a href="/register" className="Home-link">Première inscription</a>
                <a href="/login" className="Home-link">Connexion à votre compte</a>                 
            </div>
        </main>
    )
}

export default Home;

//import background from '../../assets/background.jpg';
//<img src={background} style={{width: '100%'}}/>
//<main style={{ backgroundImage:`url(${background})`, width:'100%', height:'600px'}} >  