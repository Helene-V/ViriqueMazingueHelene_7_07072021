const express = require("express");
const cors = require("cors");
const app = express();


const path = require('path');
//const createError = require('http-errors');
const helmet = require('helmet');

//require('dotenv').config({path:'./config/.end'});

const corsOptions = {
  origin: "http://localhost:3031"
};

app.use(cors(corsOptions));

app.use(express.json());

// Documentation https://expressjs.com/fr/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true }));

//app.use(helmet());

// database
const db = require("../backend/models");
const Role = db.role;

db.sequelize.sync();
/*Méthode pour supprimer la table après de nombreux essais et repartir de zéro puis resyncroniser la db : */
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// CORS - Permet à l'application d'accéder à l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// Définition de la route GET
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Groupomania" });
});

// routes
require('../backend/routes/auth.routes')(app);
require('../backend/routes/user.routes')(app);
require('../backend/routes/article.routes')(app);

//app.use('/images', express.static(path.join(__dirname, 'images')));

// Définition des rôles
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "admin"
  });
}

// Configuration du port et écoute de celui-ci pour les requêtes entrantes
const PORT = process.env.PORT || 3030;;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});