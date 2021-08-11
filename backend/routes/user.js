const express = require('express');
const router = express.Router();
const db = require('../config/db');
const userControllers = require('../controllers/userControllers');


router.post('/register', userControllers.register, (req, res)=> {
    const email = req.body.email; // récupération des données du front
    const password = req.body.password;

    db.query(
        "INSERT INTO users (email, password) VALUES (?,?);",
        [email, password,],
        (err, result) => {
            console.log(err);
        }
    );
});


router.post('/login', userControllers.login, (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "Wrong email/password combination !"})
            }
        }
    );
});

module.exports = router;