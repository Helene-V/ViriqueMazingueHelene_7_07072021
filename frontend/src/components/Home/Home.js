import React from 'react';
//import bg_social_media from '../../assets/bg_social_media.png';
import './Home.css';

function Home () {



    return (
        <main>                                     
            <div className="Background">
                <div className='Presentation'>
                    <h1>Welcome to Groupomania</h1>
                </div>
            </div>
        </main> 
    )
}

export default Home;


//                <img src={bg_social_media} alt="background" width="auto" height="auto" />
/*import React, { useEffect } from 'react';


import './Home.css';

function Home () {

    useEffect(() => {
        if (!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
        }
    });

    return (
        <main>
            <h1>Welcome to Groupomania</h1>
            <div className="Container">
                <div className="Card">
                    <a href="/register" className="Home-link">Première inscription</a>
                </div>
                <div className="Card">
                    <a href="/login" className="Home-link">Connexion à votre compte</a>                 
                </div>
            </div>
        </main>
    )
}

export default Home;

//import background from '../../assets/background.jpg';
//<img src={background} style={{width: '100%'}}/>
//<main style={{ backgroundImage:`url(${background})`, width:'100%', height:'600px'}} >  
/*
Test semantic ui
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
            <div className='Icon'>
                <Icon name='users' size='massive' color='teal'  />
            </div>
*/