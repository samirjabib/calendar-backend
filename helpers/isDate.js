const momment = require('moment');


const isDate = ( value ) => {
    if(!value){
        return false;
    }

    const date = momment(value);
    if( date.isValid()){
        return true;
    } else {
        return false;
    }

}


module.exports = { isDate }