import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthService from "../../services/auth.service";
//import AuthVerify from "../../check/AuthVerify";
import EventBus from "../../check/EventBus";
import logo from '../../assets/logo-black-400x66.png';
import './Navbar.css';

const Navbar = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
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
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="Navbar">        
        <div className="Logo">
            <img src={logo} alt="Logo" width="200px" height="auto" />
        </div>
        <div className="Navbar__links">
          <li className="Navbar__item">
            <Link to="home">
              Accueil
            </Link>
          </li>

          {showAdminBoard && (
            <li className="Navbar__item">
              <Link to="admin">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="Navbar__item">
              <Link to="profile">
                Mon profil
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
