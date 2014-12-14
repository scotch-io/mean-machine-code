var path = require('path');

module.exports = function(app) {

	// basic route for the home page
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname + '/../../public/views/index.html'));
	});

};