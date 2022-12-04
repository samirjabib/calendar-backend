const express = require('express');


//Controllers 
const { createEvent, deleteEvent, getEvents, updateEvent } = require('./events.controller');

//Midlewares
const { validateJWT } = require('../../middlewares/validate-jwt');

//Route

const eventRouter = express.Router();

eventRouter.use(validateJWT);

eventRouter.get('/', getEvents);
eventRouter.post('/', createEvent);
eventRouter.put('/:id', updateEvent);
eventRouter.delete('/:id', deleteEvent);

module.exports = { eventRouter}