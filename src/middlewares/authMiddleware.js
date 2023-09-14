const jwt = require("jsonwebtoken");
function authMiddleware(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    req.user = securityUtil.decodedJsonwebtoken(token)
    next();
  } catch (error) {
    return res.status(401).send('Token is not valid');
  }
}
module.exports = authMiddleware;
