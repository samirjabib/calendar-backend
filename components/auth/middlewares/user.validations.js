const  { body } = require('express-validator');

 
const createUserValidations = [
    body('name')
        .notEmpty()
        .withMessage('name cannot be empty'),
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('Must be a valid email'),
    body('password')
        .notEmpty()
        .withMessage('Email canno be empty')
        .isLength({ min: 8})
        .withMessage('password must be at least 8 character Long'),
];


module.exports = { createUserValidations }