import React, { useState } from 'react';
import axios from 'axios';

import './Login.css'

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios.post("http://localhost:3000/user/login", {
            email: email,
            password: password,
        })
        .then((response) => {
            console.log(response);
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
            </div>
        </div>
    )
}

export default Login