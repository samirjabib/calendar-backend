const { Schema, model } = require('mongoose');


const EventsSchema = Schema({
    title:{
        type:String,
        require
    },
    notes:{
        type:String,
    },
    start:{
        type:Date,
        require:true
    },
    end:{
        type:Date,
        require:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
});

module.exports =model('event', EventsSchema);

