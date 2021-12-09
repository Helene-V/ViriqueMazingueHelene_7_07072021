import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthService from "../../services/auth.service";
//import AuthVerify from "../../check/AuthVerify";
import EventBus from "../../check/EventBus";
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="Navbar">        
        <div className="Logo">
            <img src={logo} alt="Logo" width="200px" height="auto" />
        </div>
        <div className="Navbar__links">

          {currentUser && (
            <li className="Navbar__item">
              <Link to="articles">
                Lire les posts
              </Link>
              <Link to="add">
                Ecrire un post
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="Navbar__links">
            <li>
              <Link to="profile">Bonjour {" "}
                {currentUser.username} !
              </Link>
            </li>
            <li className="Navbar__item">
              <a href="/login"onClick={logOut}>
                Déconnexion
              </a>
            </li>
          </div>
        ) : (
          <div className="Navbar__links">
            <li className="Navbar__item">
              <Link to="login">
                Se connecter
              </Link>
            </li>

            <li className="Navbar__item">
              <Link to="register">
                S'inscrire
              </Link>
            </li>
          </div>
        )}
      </nav>

    { /*<AuthVerify logOut={logOut}/>*/ }

      
    </div>
  );
};

export default Navbar;
