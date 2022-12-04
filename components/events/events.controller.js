const { response } = require('express');


//utils
const { handleHttpError } = require('../../utils/handleHttpError.util');

//Model


const getEvents = async (req, res, next) => {
    res.json({
        status:'success',
        msg:'all events here'
    })
};


const createEvent = async (req, res, next) => {
    res.json({
        status:'success',
        msg:'event has been create'
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