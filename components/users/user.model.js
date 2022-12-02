const { Schema, model, } = require('mongoose')
const mongooseDelete = require('mongoose-delete')


const UserSchema = Schema({
        name:{
            type:String,
            required: true
        },
        email:{
            type:'String',
            required: true,
            unique :true,
        },
        password: {
            type:String,
            required:true,
        },
        role:{
            type:["user", "admin"],
            default:'user',
        },
    },

    {
        timestamps :true,
    }
);

UserSchema.plugin(mongooseDelete, { overrideMethods:"all"});

module.exports = model('user', UserSchema);

