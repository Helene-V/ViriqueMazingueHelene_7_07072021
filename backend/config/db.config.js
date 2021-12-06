module.exports = { // Paramètres de connexion MySQL
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "auth",
  dialect: "mysql",
  pool: { // CONFIGURATION DU POOL DE CONNEXION Sequelize
    max: 5, // Nb max de connexion dans le pool
    min: 0, // Nb min de connexion dans le pool
    acquire: 30000, // Temps max en millisecondes, où le pool essaiera d'avoir la connexion avant de retourner une erreur
    idle: 10000 // Temps max en millisecondes, pendant lequel une connexion peut être inactive
  }
};

//https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor