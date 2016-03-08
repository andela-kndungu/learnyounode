// The magic module
var http = require('http');

// To read file
var fs = require('fs');

// For handling requests
var server = http.createServer(function(request, response) {

  // Read file
  var stream = fs.createReadStream(process.argv[3]);

  // Send directly to response stream
  stream.pipe(response);
});

// Accepting requests at port...
server.listen(process.argv[2]);
