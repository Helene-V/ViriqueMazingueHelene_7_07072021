const db = require("../config/db.config.js");

// INITIALISATION DE SEQUELIZE
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;

/*Node et Express exportent les API REST et intéragissent avec la DB MySQL en utilisant l'ORM Sequelize*/
/* L'ORM va permettre de gagner du temps dans l'écriture du code et code maintenable, utile pour des applications "simples"*/