module.exports = function(app) {

	// basic route for the home page
	app.get('/', function(req, res) {
		res.send('Welcome to the home page!');
	});

};