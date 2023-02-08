const mongoose = require('mongoose');

console.log(process.env.DB_CNN)


const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }


}


module.exports = {
    dbConnection
}