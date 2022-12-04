const express = require('express');


//Controllers 
const { createEvent, deleteEvent, getEvents, updateEvent } = require('./events.controller');

//Midlewares
const { validateJWT } = require('../../middlewares/validate-jwt');
const { checkValidations } = require('../../middlewares/check.validations');
const { createEventsValidator  } = require('./middleware/events.validations');


//Route

const eventRouter = express.Router();

eventRouter.use(validateJWT);

eventRouter.get('/', getEvents);
eventRouter.post('/',createEventsValidator, checkValidations, createEvent);
eventRouter.put('/:id', updateEvent);
eventRouter.delete('/:id', deleteEvent);

module.exports = { eventRouter}