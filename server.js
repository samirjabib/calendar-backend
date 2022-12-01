const { app } = require('./app');



const PORT = process.env.PORT || 4000 


const startServer = () => {

    //Listen server
    app.listen( PORT, () => {
        console.log(`server on port ${PORT}`)
    })
}

startServer();