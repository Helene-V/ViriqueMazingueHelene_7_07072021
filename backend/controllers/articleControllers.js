const Article = require('../models/Article');

exports.getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json({articles});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewArticle = async (req, res, next) => {
    const article = JSON.parse(req.body.sauce);
    delete article._id;
    try {
        let { title, body } = req.body;
        let article = new Article(title, body);
        article = await article.save();
        res.status(201).json({ message: "Article créé !"})
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getArticleById = async (req, res, next) => {
    try {
        let articleId = req.params.id;
        let [article, _] = await Article.findById(articleId)
        res.status(200).json({ article: article[0] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.modifyArticle = async (req, res, next) => {
    const article = req.file ?
      {
        ...JSON.parse(req.body.article),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    Article.updateOne({ _id: req.params.id }, { ...article, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Article modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.deleteArticle = async (req, res, next) => {
    try {
        let articleId = req.params.id;
        let [article, _] = await Article.findById(articleId)
        res.status(200).json({ article: article[0] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};