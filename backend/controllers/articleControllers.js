/*const Article = require('../models/Article');

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
    const article = JSON.parse(req.body.article);
    delete article._id;
    try {
        let { title, body } = req.body;
        let article = new Article(
            title,
            body,
            imageUrl `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            );
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
        //Supprimer l'image et l'objet complet, like, article
        //const filename = article.imageUrl.split('/images/')[1]; //[1] = retourne le nom du fichier
        //fs.unlink(`images/${filename}`, ()
        res.status(200).json({ article: article[0] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.likeOrDislike = (req, res, next) => {
    Article.findOne({ _id: req.params.id })
        .then (article => {
          switch (req.body.like) {
            case 1: 
              if (!article.usersLiked.includes(req.body.userId)) {
                Article.updateOne({ _id: req.params.id }, 
                                { $inc: { likes: +1 }, 
                                  $push: { usersLiked:req.body.userId },
                                          _id: req.params.id })                            
                .then(()=> res.status(201).json({ message : 'like ajouté avec succès' }))
                .catch(error => res.status(404).json({ error })
                )
              }
              break;
            case -1: 
            if (!article.usersDisliked.includes(req.body.userId)) {
                Article.updateOne({ _id: req.params.id },
                              { $inc: { dislikes: +1 }, 
                                $push: { usersDisliked:req.body.userId },
                                        _id: req.params.id })                            
              .then(()=> res.status(201).json({ message : 'like supprimé avec succès' }))
              .catch(error => res.status(404).json({ error })
              )
            }
              break;
            case 0: 
              if (article.usersLiked.includes(req.body.userId)) {
                Article.updateOne({ _id: req.params.id }, 
                  { $inc: { likes: -1 },
                    $pull: { usersLiked:req.body.userId },
                            _id: req.params.id })                          
                .then(()=> res.status(201).json({ message : 'modification effectuée' }))
                .catch(error => res.status(404).json({ error })
                )
              } else if(article.usersDisliked.includes(req.body.userId)) {
                Article.updateOne({ _id: req.params.id }, 
                  { $inc: { dislikes: -1 },
                    $pull: { usersDisliked:req.body.userId },
                            _id: req.params.id })                           
                .then(()=> res.status(201).json({ message : 'modification effectuée' }))
                .catch(error => res.status(404).json({ error })
                )
              }
                break;
              default:
                console.log('switch default');
                throw new Error({ message: 'Problème'});
          }
        })
  };*/