// load the express package and create our app
var express = require('express');
var app     = express();

// set the port based on environment (more on environments later)
var port    = 1337; 

// send our index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

	// get an instance of the router
	var router = express.Router();

	// create routes for the admin section
	// admin main page. the dashboard
	router.get('/', function(req, res) {
		res.render('admin.dashboard');
	});

	// users page
	router.get('/users', function(req, res) {
		res.render('admin.users');
	});

	// posts page
	router.get('/posts', function(req, res) {
		res.render('admin.posts');
	});

	// apply the routes to our application
	app.use('/', router);

// start the server
app.listen(1337);
console.log('1337 is the magic port!');