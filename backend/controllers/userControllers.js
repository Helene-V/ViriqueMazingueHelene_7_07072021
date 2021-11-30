/*exports.register = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        'INSERT INTO users (email, password) VALUES (?,?)',
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Enregistrement des données") //res.send(results);
            }
        }
    );
};

*/
/* 

******REPRISE DU P6 EN EXEMPLE*****

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

const User = require('../models/User');

exports.register = (req, res, next) => {
   bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
        //db.query(`INSERT INTO user SET ?`, user, (err, result, field))
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
              token: jwt.sign(
                { userId: user._id },
                process.env.TOKEN,
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
*/