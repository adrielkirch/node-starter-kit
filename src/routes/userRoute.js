
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new user and return a token (no authentication needed)
router.post(
  '/',
  [
    check('email').isEmail().normalizeEmail(),
    check('name').isString(),
    check('password').isString(),
  ],
  userController.add
);

// router.get('/', authMiddleware, userController.getById);

module.exports = router; 