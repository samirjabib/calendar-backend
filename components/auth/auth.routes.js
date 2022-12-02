const express = require('express');
const { mathedData } = require("express-validator")

//Controllers
const { register , login, revalidateToken } = require('./auth.controller');

//Middleware
const { createUserValidations, validatorLogin } = require('./middlewares/user.validations');
const { checkValidations } = require('../../middlewares/check.validations');

//Route
const authRouter = express.Router();

//Endpoints of route

authRouter.post('/register', createUserValidations, checkValidations, register);
authRouter.post('/login', validatorLogin, checkValidations ,login);
authRouter.get('/re-validate', revalidateToken);

module.exports = { authRouter };