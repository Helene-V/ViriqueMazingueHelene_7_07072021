const express = require('express'); // Ajout de l'application Express
const bodyParser = require('body-parser');
const app = express();
//const path = require('path');

//const articleRoutes = require('./routes/article');
//const userRoutes = require('./routes/user');

// Connexion à la bd

// CORS - Permet à l'application d'accéder à l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());


//app.use('/api/auth', userRoutes); // Router importé depuis routes>user.js
//app.use('/api/articles', articleRoutes) // Router importé depuis routes>article.js

module.exports = app;