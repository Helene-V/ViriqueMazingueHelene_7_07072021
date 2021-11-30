const express = require('express');
const db = require('../config/db');
//const articleControllers = require('../controllers/articleControllers');
const router = express.Router();
//const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');


//router.get("/", auth, articleControllers.getAllArticles);
router.post("/", (req,res) => {
    const email = req.body.email
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    db.query(
        "INSERT INTO Articles (email, title, description, image ) VALUES (?,?,?,?);",
        [email, title, description, image],
        (err, results) => {
            console.log(err)
            res.send(results);
        }
    );
});
    
router.get("/"),(req,res) => {
    db.query("SELECT * FROM Articles", (err,results) => {
        if (err) {
            console.log(err)
        }
        res.send(results)
    })
}

router.post('/like', (req,res) => {

    const userLiking = req.body.userLiking
    const postId = req.body.postId

    db.query("INSERT INTO Likes (userLiking, postId) VALUES (?,?)", [userLiking, postId], (err, results) => {
        if (err) {
            console.log(err);
        }
        db.query("UPDATE Articles SET likes = likes + 1 WHERE id = ?", postId, (err2, result2) => {
            res.send(results);
        })
    });
})


//router.get("/:id", auth, articleControllers.getArticleById);
//router.put("/:id", auth, multer, articleControllers.modifyArticle);
//router.delete("/:id", auth, articleControllers.deleteArticle);

module.exports = router;





/*
router
    .route("/", auth)
    .get(articleControllers.getAllArticles)
    .post(articleControllers.createNewArticle);
    

router
    .route("/:id", auth)
    .get(articleControllers.getArticleById)
    .put(articleControllers.modifyArticle)
    .delete(articleControllers.deleteArticle);
*/