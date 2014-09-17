// get the things we need
var express = require('express');
var app     = express();

// set up our one route to the index.html file
app.get('*', function(req, res) {
	res.sendfile('./public/views/index.html');
});

// start the server on port 8080 (http://localhost:8080)
app.listen(8080);
console.log('Magic happens on port 8080.');