const { Schema, model } = require('mongoose');


const EventsSchema = Schema({
    title:{
        type:String,
        required:true,
    },
    notes:{
        type:String,
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true,
    }
});

EventsSchema.method('toJSON', function() { //this method modifique de req visual on the postman
    const { __v, _id, ...object } = this.toObject(); // select objct and make the spreak operator.
    object.id = _id; //rename id
    return object; //return object to Event Coleccion. 
});


module.exports =model('event', EventsSchema);

