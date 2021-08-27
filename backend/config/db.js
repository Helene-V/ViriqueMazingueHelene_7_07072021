require('dotenv').config();
const mysql = require('mysql2');
const app = require('../app');

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