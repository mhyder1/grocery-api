const AuthService = require("../auth/auth-service");


function requireAuth(req, res, next) {
  // console.log('requireAuth')
  // console.log(req.get('Authorization'))

  const authToken = req.get("Authorization") || "";


  let bearerToken;

  if (!authToken.toLowerCase().startsWith("bearer")) {

    return res.status(401).json({ error: "Missing bearer's token" });

  } else {

    bearerToken = authToken.slice(7, authToken.length);

  }


  try {

    const payload = AuthService.verifyJwt(bearerToken);


    AuthService.getUserWithUserName(req.app.get("db"), payload.sub).then(

      (user) => {

        if (!user) {

          return res.status(401).json({ error: "Unauthorized request" });

        }


        req.user = user;

        next();

      }

    );

  } catch (error) {

    return res.status(401).json({ error: "Unauthorized request" });

  }

}


module.exports = {

  requireAuth,

};