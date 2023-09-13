const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(`JWT Token: ${token}`);
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      } else {
        req.user = user; // Set the user in the request object
        next(); // Call next() to pass control to the next middleware/route handler
      }
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that !");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that !");
      }
    });
  };

module.exports = { verifyToken, verifyTokenAndAuth,verifyTokenAndAdmin };
