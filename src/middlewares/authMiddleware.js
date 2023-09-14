const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acesso não autorizado' });
  }

  try {
    const decoded = jwt.verify(token, 'mySecret');
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
}

module.exports = authMiddleware;
