const mysql = require('mysql');
//const app = require('../app');
//require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'groupomania',
  password: 'root'
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = db;

/*
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
});*/

/*
//AFFICHAGE DES ELEMENTS DANS LA DB [] :
let sql = "SELECT * FROM articles;";

pool.execute(sql, function(err, result) {
  if (err) throw err;
  console.log(result);
  //ou encore console.log(res.title)
});
*/

/*exports.connect = (done) => {
  connection.connect((err) =>{
      if(err){
          console.log('db connection error');
      }
      else{
          done()
          console.log('db connection');
      }
 })
}*/