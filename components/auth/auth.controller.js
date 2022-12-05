const { response } = require('express');
const { matchedData } = require('express-validator');
const { generateJWT } = require('../../helpers/jwt');


//Utils
const { handleHttpError } = require('../../utils/handleHttpError.util');
const { encrypt, compare } = require('../../utils/handlePassword');

//Model
const User = require('../users/user.model')

const register = async (req, res = response, next) => { // req: CLIENT TO SERVER / res: SERVER TO CLIENT / next: ERROR SEND TO NEXT MIDDLEWARE

    const data = matchedData(req); //https://express-validator.github.io/docs/matched-data-api.html

    const { name, email, password } = data; //Desesctrutured from body

    
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
        console.log(error)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
}


const login = async (req, res) =>  {

    const { email, password } = req.body

    try{

        const user = await User.findOne({email})

        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS");
            return
        }        
        const validPassword = await compare( password , user.password);

        
        if(!validPassword){
            handleHttpError(res, "PASSWORD_INVALID", 401)
            return
        }

        //Generate token
        const token = await generateJWT(user._id, user.name)

        console.log(token)
        const data = {
            uid:user.id,
            name:user.name,
            token
        }

        res.json({status:"success", data})

    } catch(error) {
        console.log(error)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}


const revalidateToken = async (req, res = response) => {
    const { uid, name } = req;


    //Generar JWT

    const token = await generateJWT(uid, name)

    res.json({
        status:'succes',
        token,
        uid,
        name
    })
}
module.exports = { login, register , revalidateToken}