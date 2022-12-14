const { response } = require('express');
const { matchedData } = require('express-validator');
const { Model } = require('mongoose');


//utils
const { handleHttpError } = require('../../utils/handleHttpError.util');

//Model
const Event = require('./events.model');


const getEvents = async (req, res = response, next) => {
    const events = await Event.find()
                                .populate('user', 'name') // select the information you want see 
    res.status(200).json({
        status:"success",
        events,
    })
};


const createEvent = async (req, res = response, next) => {
    console.log(req.body)
    const event = new Event( req.body );

    try {
        event.user = req.uid;

        const eventSaved = await event.save();
    
        res.status(201).json({
            status:'success',
            event: eventSaved,
        })
    } catch (error) {
        console.log(error)
        handleHttpError(res,"ERROR_CREATE_EVENT",500)
    }
   
}

const updateEvent = async (req, res, next) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        const event = await Event.findById( eventId );

        if(!event){
            return res.status(404).json({
                status:"success",
                msg:"The event dont exist by this id"
            });
        };

        if( event.user.toString() !== uid) {
            return res.status(401).json({
                status:"failed",
                msg:"you do not have permission on this account "
            })
        };

        const newEvent = {
            ...req.body,
            user:uid,
        };

        const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new:true }); //the 3 parameter is for update in console the response. 

        res.status(200).json({
            status:"success",
            event: eventUpdated,
        })

    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR UPDATE EVENT")
    }

}

const deleteEvent = async (req, res, next) => {
  
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        const event = await Event.findById( eventId );

        if(!event){
            return res.status(404).json({
                status:"success",
                msg:"The event dont exist by this id"
            });
        };

        if( event.user.toString() !== uid) {
            return res.status(401).json({
                status:"failed",
                msg:"you do not have permission on this account "
            })
        };

        const newEvent = {
            ...req.body,
            user:uid,
        };

        await Event.findOneAndDelete( eventId, newEvent); //the 3 parameter is for update in console the response. 

        res.status(200).json({
            status:"success",
            msg:"event deleted "
        })

    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR DELETING EVENT")
    }
};


module.exports = {
    createEvent,
    deleteEvent,
    getEvents,
    updateEvent
}