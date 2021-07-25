const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');


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

module.exports = router;
