const jwt = require('jsonwebtoken');


const generateJWT = (uid, name) => {
    const payload = { uid, name };

    jwt.sign(payload, process.env.JWT_SECRET_KEY)
}