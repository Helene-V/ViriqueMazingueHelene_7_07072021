import React from "react";
import AuthService from "../../services/auth.service";

import './Profile.css';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header>
        <h1>
          <strong>Espace personnel de {currentUser.username}</strong>
        </h1>
      </header>
      <p>
        <strong>Votre numéro identifiant :</strong> {currentUser.id}
      </p>
      <p>
        <strong>Votre adresse mail :</strong> {currentUser.email}
      </p>
      <strong>Votre rôle sur la plateforme :</strong> {currentUser.roles}
    </div>
  );
};

export default Profile;