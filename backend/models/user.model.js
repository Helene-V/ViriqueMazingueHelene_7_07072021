module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
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

  /*Modéle sequelize pour la table users dans la db

  Représente la table dans la DB MySQL
  Les colonnes générées automatiquement :
  - id
  - username
  - email
  - password

  DONC il n'y a plus besoin d'écrire les fonctions CRUD
  
  C'est Sequelize qui s'en occupe (c'est les fonctions qui seront ensuite dans le controller):

  - Créer un utilisateur create(object)
  - Trouver un utilisateur avec son id findByPk(id)
  - Trouver un utilisateur avec son email findOne({ where: { email: ...} })
  - Trouver tous les utilisateurs findAll()
  - Trouver par nom d'utilisateurs findAll({ where: { username: ...} })
Idem pour les articles,
  - create a new Article create(object)
  - find a Article by id findByPk(id)
  - get all Articles findAll()
  - update a Article by id update(data, where: { id: id })
  - remove a Article destroy(where: { id: id })
  - remove all Articles destroy(where: {})
  - find all Articles by title findAll({ where: { title: ... } })
  */