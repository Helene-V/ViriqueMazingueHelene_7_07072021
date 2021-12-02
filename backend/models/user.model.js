module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };

  /* MODELE SEQUELIZE
  Représente la table dans la DB MySQL
  Les colonnes générées automatiquement :
  - id
  - name
  - email
  - password

  DONC = il n'y a plus besoin d'écrire les fonctions CRUD !
  
  C'est Sequelize qui s'en occupe (c'est les fonctions qui seront ensuite dans le controller):
  - create a new Tutorial: create(object)
  - find a Tutorial by id: findByPk(id)
  - get all Tutorials: findAll()
  - update a Tutorial by id: update(data, where: { id: id })
  - remove a Tutorial: destroy(where: { id: id })
  - remove all Tutorials: destroy(where: {})
  - find all Tutorials by title: findAll({ where: { title: ... } })
  Et si on ne voulait pas un Id généré automatiquement ?
  */