//Npm
const { json } = require('express');
const  bodyParser = require('body-parser')
const { router } = require('./routes/router');
const express = require('express')
const cors = require('cors')

const { handleHttpError } = require('./utils/handleHttpError.util');


const app = express(); //Init app

//variable  environment
require('dotenv').config();



//api config 
app.use(json()); //lecture and parse body
app.use(express.static('public')); //we indicate the html for the render the app routes
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());//Enable Cors

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