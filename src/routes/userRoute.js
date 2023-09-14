
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');

router.post(
  '/',
  [
    check('email').isEmail().normalizeEmail(),
    check('name').isString(),
    check('password').isString(),
  ],
  userController.add
);

router.post('/login', [
  check('email').isEmail().normalizeEmail(),
  check('password').isString(),
],
userController.login)

router.get('/',[
  authMiddleware
],
userController.getById
)

router.get('/all',[
  authMiddleware
],userController.getAll)

router.get('/pagination',[
  authMiddleware
],userController.pagination)

module.exports = router; 