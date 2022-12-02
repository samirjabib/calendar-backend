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
        versionKry:false,
    }
);

UserSchema.plugin(mongooseDelete, { overrideMethods:"all"}); //https://www.npmjs.com/package/mongoose-delete enable soft delete in documents of Mongo

module.exports = model('user', UserSchema);

