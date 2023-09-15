const userService = require("../services/userService");
const { validationResult } = require("express-validator");

async function add(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, name, password } = req.body;
    const user = await userService.add(email, name, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getById(req, res) {
  try {
    const user = await userService.getById(req.user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAll(req, res) {
  try {
    const user = await userService.getAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function pagination(req, res) {
  try {
    const user = await userService.pagination(req.body.pageSize,req.body.page);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  add,
  login,
  getById,
  getAll,
  pagination
};
