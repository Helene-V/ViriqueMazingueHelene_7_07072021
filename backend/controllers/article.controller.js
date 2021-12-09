const db = require("../models");
const Article = db.articles;
const Op = db.Sequelize.Op;

// CREER ET ENREGISTRER UN NOUVEL ARTICLE/POST
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // CREATION
  const article = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // ENREGISTREMENT DANS LA DB
  Article.create(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
    });
};

// RECUPERATION DE TOUS LES ARTICLES/POSTS
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Article.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
};

// RECUPERATION D'UN ARTICLE/POST PAR SON ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Article.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find post with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving post with id=" + id
      });
    });
};

// MODIFIER UN ARTICLE/POST
exports.update = (req, res) => {
  const id = req.params.id;

  Article.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating post with id=" + id
      });
    });
};

// SUPPRIMER UN ARTICLE/POST
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete post with id=${id}. Maybe post was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete post with id=" + id
      });
    });
};

// SUPPRIMER TOUS LES ARTICLES/POSTS DE LA DB
exports.deleteAll = (req, res) => {
  Article.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} post were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all posts."
      });
    });
};

// RECUPERER TOUS LES ARTICLES/POSTS PUBLIES
exports.findAllPublished = (req, res) => {
  Article.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
};