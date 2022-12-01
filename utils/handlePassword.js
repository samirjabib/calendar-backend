const bycrypt = require('bcryptjs')

const encrypt = async(password) => {

    const salt = await bycrypt.genSalt(10);

    const hash = await bycrypt.hash(password, salt)

    return hash
};


const compare  = async(clientPassword, userPassword ) => {
    
    const password = await bycrypt.compare(clientPassword, userPassword)

    return password;
}


module.exports = { encrypt, compare };