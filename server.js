const { app } = require('./app');
const { dbConnection } = require('./database/config');




const PORT = process.env.PORT || 4000 


const startServer = () => {

    //Listen server
    app.listen( PORT, () => {
        console.log(`server on port ${PORT}`)
    })

    dbConnection();
}

startServer();