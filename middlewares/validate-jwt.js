const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = ( req, res = response, next ) => {

    // x-token headers
    const token = req.header('x-token');
    console.log(token)

    if ( !token ) {
        return res.status(401).json({
            status: 'failed',
            msg: 'token dont exists'
        });
    }

    try {
        
        const { uid, name } = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY
        );

        req.uid = uid;
        req.name = name;


    } catch (error) {
        return res.status(401).json({
            status: 'failed',
            msg: 'invalid token'
        });
    }



    next();
}


module.exports = {
    validateJWT
}