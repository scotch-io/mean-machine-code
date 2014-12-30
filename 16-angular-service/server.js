// CALL THE PACKAGES =================
// ===================================
var express    = require('express');	// call express
var app        = express(); 			// define our app using express
var bodyParser = require('body-parser'); 
var morgan     = require('morgan'); 	// used to see requests
var mongoose   = require('mongoose');
var config 	   = require('./config');

// APP CONFIGURATION ==================
// ====================================
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log all requests to the console 
app.use(morgan('dev'));

// connect to our database (hosted on modulus.io)
mongoose.connect(config.database); 

// set static files location
app.use(express.static(__dirname + '/public'));

// APPLICATION ROUTES ================
// ===================================

// API ROUTES ------------------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// BASIC ROUTES ----------------------
require('./app/routes/app')(app);

// START THE SERVER ==================
// ===================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);