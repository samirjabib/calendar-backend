const { validationResult } = require('express-validator');

const { AppError } = require('../utils/appError.util')

const checkValidations = (req, res, next) => {
    const errors = validationResult(req);
    console.log('me renderice')  
    if (!errors.isEmpty()) {
      const messages = errors.array().map(({ msg }) => msg);
  
      // [msg, msg, msg] -> 'msg. msg. msg'
      const errorMsg = messages.join('. ');
  
      return next(new AppError(errorMsg, 400));
    }
  
    next();
};

module.exports = { checkValidations }