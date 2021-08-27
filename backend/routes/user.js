const express = require('express');
const db = require('../config/db');
const router = express.Router();
const auth = require('../middleware/auth');
const userControllers = require('../controllers/userControllers');


router.post('/register', userControllers.register, (req, res)=> {
    const email = req.body.email; // récupération des données du front
    const password = req.body.password;

    db.query(
        "INSERT INTO users (email, password) VALUES (?,?);",
        [email, password,],
        (err, results) => {
            console.log(err);
            res.send(results);
        }
    );
});


router.post('/login', userControllers.login, (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ?",
        email,
        (err, results) => {
            if (err) {
                console.log(err);
            }
            if (results.length > 0) {
                if (password == results[0].password) {
                res.json({loggedIn: true, email: email});
            } else {
                res.json({loggedIn: false, message: "Wrong email/password combination !"});
                }
            } else { 
                res.json({loggedIn: false, message: "User doesn't exist"});
            }
            res.send(results);
        }
    );
});

//router.delete('/:id', auth, userControllers.deleteUser)

module.exports = router;
