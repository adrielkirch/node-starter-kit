const userService = require('../services/userService');
const { validationResult } = require('express-validator');

// Controlador para criar um novo usuário
async function add(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, name } = req.body;
    const user = await userService.add(email, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}

module.exports = {
  add,
};
