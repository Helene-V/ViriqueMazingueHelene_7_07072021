const createError = require('http-errors');
const express = require('express'); // Ajout de l'application Express
const path = require('path');
//const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet'); // Package Helmet pour la sécurité des en-têtes
require('dotenv').config();  // Mise en place de dotenv pour cacher les identifiants d'accès à la db

const indexRouter = require('../backend/routes/user.js');

const app = express();
//const mysql = require('mysql');
//const db = require('../backend/config/db');

const corsOptions = {
  origin: "http://localhost:3031"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({
//    extended: true
//}));

//app.use(cors());

app.use(helmet());

//const userRoute = require('./routes/user');
//const registerRoute = require('./routes/register');
//const articleRoute = require('./routes/article');


// CORS - Permet à l'application d'accéder à l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api', indexRouter);

//app.use('/images', express.static(path.join(__dirname, 'images')));


//app.use('/user', userRoute);
//app.use('/register', registerRoute);
//app.use('/article', articleRoute);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Groupomania" });
});

require("../backend/routes/user");

module.exports = app;

