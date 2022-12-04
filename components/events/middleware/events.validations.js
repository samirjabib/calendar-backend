const  { check } = require('express-validator');
const { isDate } = require('../../../helpers/isDate')

 
const createEventsValidator = [
    check('title', 'The title is required').not().isEmpty(),
    check('start', 'start date is required').custom(isDate),
    check('end', 'end date is equired').custom(isDate)
];

module.exports = {
    createEventsValidator,
}