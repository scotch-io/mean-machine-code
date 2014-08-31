// get the http and filesystem modules
var http = require('http')
  fs = require('fs');

// create our server using the http module
http.createServer(function(req, res) {

  // write to our server. set configuration for the response
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin' : '*'
  });

  var readStream = fs.createReadStream(__dirname + '/index.html');

  // send a message
  readStream.pipe(res);  

}).listen(1337);

// tell ourselves what's happening
console.log('Visit me at http://localhost:1337');
