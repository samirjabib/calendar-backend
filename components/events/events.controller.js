const { response } = require('express');
const { matchedData } = require('express-validator');
const { Model } = require('mongoose');


//utils
const { handleHttpError } = require('../../utils/handleHttpError.util');

//Model
const Event = require('./events.model');


const getEvents = async (req, res = response, next) => {
   
};


const createEvent = async (req, res = response, next) => {
    console.log(req)

    res.json({
        status:'succes',
        msg:'event create',
    })
}

const updateEvent = async (req, res, next) => {
    res.json({
        status:'success',
        msg:'even has been update'
    })
}

const deleteEvent = async (req, res, next) => {
    res.json({
        status:'success',
        msg:'event delete'
    })
};


module.exports = {
    createEvent,
    deleteEvent,
    getEvents,
    updateEvent
}