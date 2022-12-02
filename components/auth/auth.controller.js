const { response, json } = require('express');


//Utils
const { handleHttpError } = require('../../utils/handleHttpError.util');
const { encrypt } = require('../../utils/handlePassword');

//Model
const User = require('../users/user.model')

const register = async (req, res = response, next) => { // req: CLIENT TO SERVER / res: SERVER TO CLIENT / next: ERROR SEND TO NEXT MIDDLEWARE
    
    const { name, email, password } = req.body; //Desesctrutured from body
    
    try{

 
    let userExist = await User.findOne({email}) //if user exist return error

    if(userExist){
        return handleHttpError(res, 'EMAIL_ALREADY_EXISTS', 400)
    }

    const HashPassword = await encrypt(password);



    const newUser = new User({
        name,
        email,
        password:HashPassword,
    })


    
    await newUser.save(); //For save in database mongo.
    newUser.password = undefined; //remove password from response. 



    res.status(201).json({ status:'succes', newUser,});

    } catch(error) {
        next(error)
    }
}


const login = async (req, res) =>  {
    
    const { email, password} = req.body;

    try{
        const user = await User.findOne({$where:email})
    } catch(error) {
        
    }
}


const revalidateToken = (req, res) => [
    //TODO
]

module.exports = { login, register , revalidateToken}