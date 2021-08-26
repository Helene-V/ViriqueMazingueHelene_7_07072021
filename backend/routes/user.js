const express = require('express');
const router = express.Router();
//const auth = require('../middleware/auth');
//const db = require('../config/db');
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
            if (results) {
                if (password == results[0].password) {
                res.send("You are logged in !");
            } else {
                res.send({ message: "Wrong email/password combination !"});
                }
            } else { 
                res.send("User doesn't exist");
            }
            res.send(results);
        }
    );
});


module.exports = router;

/*
router.post('/register', userControllers.register)
router.post('/login', userControllers.login);
*/