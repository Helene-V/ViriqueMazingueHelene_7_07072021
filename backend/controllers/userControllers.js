const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = (req, res, next) => {
   bcrypt.hash(req.body.password, 10) // Hash du mot de passe passé dans le body avec 10 salages
      .then(hash => { // Récupération du hash de mot de passe
        const user = new User({
          email: req.body.email,
          password: hash  // Enregistrement du mot de passe crypté
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign( // Création du token encodé
                { userId: user._id }, // Un utilisateur ne doit pas pouvoir modifier un objet d'un autre utilisateur
                'RANDOM_TOKEN_SECRET', // En production, indiquer une clé complexe et aléatoire
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };