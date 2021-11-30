/*const express = require('express');
const router = express.Router();
const cors = require('cors');


//const auth = require('../middleware/auth');
//const userControllers = require('../controllers/userControllers');


//const cors = require('cors');
//const db = require('../config/db');


router.post('/register', (req, res)=> { // Je crée ma route
    const email = req.body.email; // récupération des données du front
    const password = req.body.password;

    db.query(
        'INSERT INTO users (email, password) VALUES (?,?)',
        [email, password], // j'envoi dans mySql les données du front dans un array (2 data)
        (err, result) => { // et ça ne marche pas :'(
            if (err) {
                console.log(err)
            } else {
                res.send("Enregistrement des données") //res.send(results);
            }
        }
    );
});

module.exports = router;

//router.post('/register');


//module.exports = router;


/*


*/