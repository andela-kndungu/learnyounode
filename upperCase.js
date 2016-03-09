// All the magic
var http = require('http');

// To connect streams
var map = require('through2-map');

// To handle requests and serve responses
var server = http.createServer(function(request, response) {

  // Only handle POST requests
  if (request.method === 'POST') {

    // Pass to response after modification
    request.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
});

// Listening at port
server.listen(process.argv[2]);
