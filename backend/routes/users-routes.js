const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/:uid', userController.getUserById);

router.post('/login',
    [
    check('email').normalizeEmail().isEmail(),
    check('email').not().isEmpty(),
    check('password').not().isEmpty(),
    check('password').isLength({ min: 6 })],
    userController.login);

router.post('/signup',
    [
    check('email').normalizeEmail().isEmail(),
    check('email').not().isEmpty(),
    check('password').not().isEmpty(),
    check('password').isLength({ min: 6 })
    ],
    userController.signUp);

module.exports = router;