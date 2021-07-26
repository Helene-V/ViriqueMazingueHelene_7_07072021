require('dotenv').config();
const cors = require('cors');

const express = require('express'); // Ajout de l'application Express
const app = express();
//const path = require('path');

//const article = require('./routes/article');
//const userRoutes = require('./routes/user');

// CORS - Permet à l'application d'accéder à l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use(cors());


app.use('/auth', require('./routes/user')); // Router importé depuis routes>user.js
app.use('/articles', require("./routes/articles")); // Router importé depuis routes>article.js

module.exports = app;