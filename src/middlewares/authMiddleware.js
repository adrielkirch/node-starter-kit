const jwt = require("jsonwebtoken");
const securityUtil = require("../utils/securityUtil"); // Import your securityUtil module

function authMiddleware(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    req.user = securityUtil.decodedJsonwebtoken(token); // Call the function from securityUtil
    next();
  } catch (error) {
    return res.status(401).send('Token is not valid');
  }
}

module.exports = authMiddleware;
