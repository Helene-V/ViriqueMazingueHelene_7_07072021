import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './Login.css'

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    let history = useHistory()

    const login = () => {
        axios.post("http://localhost:3000/user/login", {
            email: email,
            password: password,
        })
        .then((response) => {
            
            if (response.data.loggedIn) {
                localStorage.setItem("loggedIn", true)
                localStorage.setItem("email", response.data.email)
                history.push('/');
            } else {
                setErrorMessage(response.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
            console.log(email);
            console.log(password);
            console.error(error.response.headers);
          });
    };

    return (
        <div className="Login">
            <h1>Connexion à votre compte</h1>
            <div className="LoginForm">
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <button onClick={login}>Se connecter</button>
                <h2 className="Error">{errorMessage}</h2>
            </div>
        </div>
    )
}

export default Login