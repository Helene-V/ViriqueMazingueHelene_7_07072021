const express = require('express');
const router = express.Router();
const db = require('../config/db');
const userControllers = require('../controllers/userControllers');


router.post('/register', userControllers.register, (req, res)=> {
    const username = req.body.username; // récupération des données du front
    const password = req.body.password;

    db.query(
        "INSERT INTO users(username, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
});

router.post('/login', userControllers.login, (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password combination !"})
            }
        }
    );
});

module.exports = router;