//Npm
const { json } = require('express');
const express = require('express');
const { router } = require('./routes/router');


const { handleHttpError } = require('./utils/handleHttpError.util');


const app = express(); //Init app

//variable  environment
require('dotenv').config();



//api config 
app.use(json()); //lecture and parse body
app.use(express.static('public')); //we indicate the html for the render the app routes

//Main Route

app.use('/api/v1', router ); //Use main route

// Error endpoint not found
app.all('*', (req, res) => {
	handleHttpError(
		res,
		`${req.method} ${req.url} not found in this server`,
		404
	);
});



module.exports = { app }