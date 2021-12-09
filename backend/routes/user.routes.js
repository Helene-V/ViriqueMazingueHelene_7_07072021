const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


// ACCES AU CONTENU - GET
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/content/all", controller.allAccess);

  app.get("/api/content/user", [authJwt.verifyToken], controller.userBoard);
};


