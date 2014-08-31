// load the express package and create our app
var express = require('express');
var app     = express();

// set the port based on environment (more on environments later)
var port    = process.env.PORT || 8080; 

// send our index.html file to the user for the home page
app.get(function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

// start the server
app.listen(port);
console.log(port + ' is the magic port!');