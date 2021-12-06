import React, { useState } from 'react';
import UserDataService from '../../services/UserDataService';
//const axios = require('axios');
//import axios from "axios";

import './Register.css';
const AddUser = () => {
  const initialUserState = {
    id: null,
    name: "",
    email: "",
    password: ""
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    let data = {
      name: user.name,
      email: user.email,
      password: user.password
    };

    UserDataService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          password: response.data.password
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
       <div className="Register">
          <h1>Création de votre compte</h1>
          <div className="RegisterForm">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button onClick={newUser}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={user.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              required
              value={user.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={user.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>

          <button onClick={saveUser}>
            Submit
          </button>
        </div>
      )}
    </div>
    </div>
  );

};

export default AddUser;


/*
function Register () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = () => {
        axios.post("/register", {
            name: name,
            email: email, // ça c'est mon req.body.email qui est passé au back via axios
            password: password,
        })
        .then(() => {
            console.log("Nouvel utilisateur enregsitré !");
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
                    placeholder="Name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
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
                <button onClick={addUser}>S'inscrire</button>
            </div>
        </div>
    )
}

export default Register;

*/
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