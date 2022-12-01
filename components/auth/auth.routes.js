const express = require('express');

//Controllers
const { register , login, revalidateToken } = require('./auth.controller');

//Middleware
const { createUserValidations } = require('./middlewares/user.validations');
const { checkValidations } = require('../../middlewares/check.validations');

//Route
const authRouter = express.Router();

//Endpoints of route

authRouter.post('/register', createUserValidations, checkValidations, register);
authRouter.post('/login', login);
authRouter.get('/re-validate', revalidateToken);

module.exports = { authRouter };