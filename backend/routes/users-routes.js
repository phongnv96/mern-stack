const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/:uid', userController.getUserById);

router.post('/login', userController.login);

router.post('/signup', userController.signUp);

module.exports = router;