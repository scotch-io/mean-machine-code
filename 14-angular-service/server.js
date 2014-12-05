// ======================================
// BASE SETUP ===========================
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');	// call express
var app        = express(); 			// define our app using express
var morgan     = require('morgan'); 	// used to see requests
var mongoose   = require('mongoose');
var port       = process.env.PORT || 8080; // set the port for our app
var config 	   = require('./config');

// APP CONFIGURATION ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log all requests to the console 
app.use(morgan('dev'));

// connect to our database (hosted on modulus.io)
mongoose.connect(config.database); 

// ===================================
// APPLICATION ROUTES ================
// ===================================

// BASIC ROUTES ----------------------
require('./app/routes/app')(app);

// API ROUTES ------------------------
var apiRoutes = require('./app/routes/api')(app);
app.use('/api', apiRoutes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);