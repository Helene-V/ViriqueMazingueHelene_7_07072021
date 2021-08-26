import React, { useState } from 'react';
import axios from 'axios';

import './Register.css';

function Register () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        axios.post("http://localhost:3000/user/register", {
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
        <div className="Register">
            <h1>Création de votre compte</h1>
            <div className="RegisterForm">
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
                <button onClick={register}>S'inscrire</button>
            </div>
        </div>
    )
}

export default Register