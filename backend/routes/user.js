const express = require('express');
const router = express.Router();
const db = require('../config/db');
const userControllers = require('../controllers/userControllers');


router.post('/register', userControllers.register, (req, res)=> {
    const username = req.body.username; // récupération du front
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
    const username = req.body.username; // récupération du front
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


/*
router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
*/

/*
router.post('/register', userControllers.register, async (req, res) => {
    try {
        await db('users').insert({email: email, hash: hash});
        res.status(200).json('All good !');
        } catch(e) {
            console.log(e);
            res.status(500).send('Something broke !');
        }
})


router.post('/login', userControllers.login, async (req, res) => {
    try {
        const user = await db('users').first('*').where({email: email});
        res.status(200).json('All good !');
        } catch(e) {
            console.log(e);
            res.status(500).send('Something broke !');
        }
})
*/