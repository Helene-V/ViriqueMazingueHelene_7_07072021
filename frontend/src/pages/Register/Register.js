import React, { useState } from 'react';
import axios from "axios";

import './Register.css';


function Register () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [username, setUsername] = useState(''); création de l'username pour afficher le nom de la personne qui publie


    const register = () => {
        axios.post("/register", { //axios.post("http://localhost:3000/register", {
            email: email, // ça c'est mon req.body.email qui est passé au back via axios
            password: password,
        })
        .then(() => {
            console.log("ça marche !");
        })
        .catch(err => { 
            console.log(err); 
          })
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

export default Register;
/*
const register = () => {
    axios.post("http://localhost:3000/register", { //axios.post("http://localhost:3000/user/register", {
        email: email, // ça c'est mon req.body.email qui est passé au back via axios
        password: password,
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        console.log(email);
        console.log(password);
        console.error(error.response.headers);
      });
};
*/

/*
    const register = () => {
        fetch("http://localhost:3000/user/register", {
            email: email,
            password: password,
        })
        .then(response =>
            response.json())
        .catch(error => {
            console.log(error);
            console.log(email);
            console.log(password);
            console.error(error.response.headers);
          });
    };*/