module.exports = app => {
    const articles = require("../controllers/article.controller.js");
  
    const router = require("express").Router();
  
    // CREER UN NOUVEL ARTICLE
    router.post("/", articles.create);
  
    // RECUPERER TOUS LES ARTICLES
    router.get("/", articles.findAll);
  
    // RETROUVER LES ARTICLES PUBLIES
    router.get("/published", articles.findAllPublished);
  
    // RETROUVER UN ARTICLE PAR SON ID
    router.get("/:id", articles.findOne);
  
    // MODIFIER UN ARTICLE VIA SON ID
    router.put("/:id", articles.update);
  
    // SUPPRIMER UN ARTCILE VIA SON ID
    router.delete("/:id", articles.delete);
  
    // SUPPRIMER TOUS LES ARTICLES
    router.delete("/", articles.deleteAll);
  
    app.use('/api/articles', router);
  };

  /* Récap' des routes de l'API :
  GET --> api/articles --> récupére tous les articles
  GET --> api/articles/:id --> récupère l'article par son id
  POST --> api/articles --> ajoute un nouvel article
  PUT --> api/articles/:id --> modifie un article récupéré par son id
  DELETE --> api/articles/:id --> supprime un article récupéré par son id
  DELETE --> api/articles --> supprime TOUS les articles
  GET --> api/articles?title=[plop] --> trouve tous les articles dont le titre contient 'plop'
  */

/*Penser à la suppression des commentaires en cascade via Sequelize si l'on supprime un compte utilisateur*/