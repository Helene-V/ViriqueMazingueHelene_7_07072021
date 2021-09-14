const express = require('express'); // Ajout de l'application Express
const helmet = require('helmet'); // Package Helmet pour la sécurité des en-têtes
require('dotenv').config();  // Mise en place de dotenv pour cacher les identifiants d'accès à la db
const cors = require('cors');
const app = express();
const db = require('../backend/config/db');
const path = require('path');


const userRoute = require('./routes/user');
const articleRoute = require('./routes/article');


// CORS - Permet à l'application d'accéder à l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(cors());
app.use(express.json());
app.use(helmet());


//app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/user', userRoute);
app.use('/article', articleRoute);
//app.use('/auth', userRoutes);
//app.use('/articles', articleRoutes);
//app.use('/auth', require('./routes/user')); // Router importé depuis routes>user.js
//app.use('/articles', require("./routes/articles")); // Router importé depuis routes>article.js

module.exports = app;

