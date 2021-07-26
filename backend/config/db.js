require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
})

module.exports = pool.promise();

/*
//AFFICHAGE DES ELEMENTS DANS LA DB [] :
let sql = "SELECT * FROM articles;";

pool.execute(sql, function(err, result) {
  if (err) throw err;
  console.log(result);
  //ou encore console.log(res.title)
});
*/