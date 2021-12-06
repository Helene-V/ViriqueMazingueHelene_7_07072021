const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");


// INSCRIPTION ET CONNEXION - POST
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail, ], controller.signup);
    //verifySignUp.checkRolesExisted
  
  app.post("/api/auth/signin", controller.signin);
};

/*Manque supprimer utilisateur et ses posts et commentaires - cascade*/
/*Modifier un utilisateur depuis son profil*/