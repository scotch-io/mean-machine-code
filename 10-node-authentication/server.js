// BASE SETUP
// =============================================================================

// CALL THE PACKAGES
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser'); 	// get body-parser
var morgan 	   = require('morgan'); 		// used to see requests

// APP CONFIGURATION

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log all requests to the console 
app.use(morgan('dev'));

var port     = process.env.PORT || 8080; // set the port for our app

// get mongoose
// connect to our database (hosted on modulus.io)
// grab out User model
var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:noder@novus.modulusmongo.net:27017/Iganiq8o'); 
var User     = require('./app/models/user');

// ROUTES FOR OUR API
// =============================================================================

// get an instance of the express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log(req.method, req.url);
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working 
// accessed at GET http://localhost:8080/api
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

	// create a user (accessed at POST http://localhost:8080/users)
	.post(function(req, res) {
		
		var user = new User();		// create a new instance of the User model
		user.name = req.body.name;  // set the users name (comes from the request)

		user.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'User created!' });
		});

	})

	// get all the users (accessed at GET http://localhost:8080/api/users)
	.get(function(req, res) {
		User.find(function(err, users) {
			if (err)
				res.send(err);

			res.json(users);
		});
	});

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

	// get the user with that id
	.get(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err)
				res.send(err);
			res.json(user);
		});
	})

	// update the user with this id
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {

			if (err)
				res.send(err);

			user.name = req.body.name;
			user.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'User updated!' });
			});

		});
	})

	// delete the user with this id
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);