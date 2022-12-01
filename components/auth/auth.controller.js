const { response, json } = require('express');


//Utils
const { handleHttpError } = require('../../utils/handleHttpError.util');
const { encrypt } = require('../../utils/handlePassword');

//Model
const User = require('../users/user.model')

const register = async (req, res = response) => { // req: CLIENT TO SERVER / res: SERVER TO CLIENT / next: ERROR SEND TO NEXT MIDDLEWARE
    
    const { name, email, password } = req.body; //Desesctrutured from body
    
    try{

 
    const userExist = await .findOne({email}) //if user exist return error

    if(userExist){
        return handleHttpError(res, 'EMAIL_ALREADY_EXISTS', 400)
    }

    const HashPassword = await encrypt(password);

    const user = await User.create({
        name,
        email,
        password: HashPassword,
    });
    

    res.status(201, json.{status:'succes', user});

    } catch(error) {
        console.log(error)
    }
    

}


const login = (req, res) => {
    //TODO 
}


const revalidateToken = (req, res) => [
    //TODO
]

module.exports = { login, register , revalidateToken}