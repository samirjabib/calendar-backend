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
    
    const event = new Event( req.body );

    try {
        event.user = req.uid;

        const eventSaved = await event.save();
    
        res.status(500).json({
            status:'success',
            event: eventSaved,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:'failed',
            msg:'contact admin for more info.'
        })
    }
   
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