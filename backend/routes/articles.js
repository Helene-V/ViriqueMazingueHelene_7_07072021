const express = require('express');
const articleControllers = require('../controllers/articleControllers');
const router = express.Router();

router
    .route("/")
    .get(articleControllers.getAllArticles)
    .post(articleControllers.createNewArticle);

router.route("/:id").get(articleControllers.getArticleById)

module.exports = router;