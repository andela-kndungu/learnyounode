// All the magic
var http = require('http');

// To parse request url
var url = require('url');

// Handle requests and responses
var server = http.createServer(function(request, response) {

  // Response object
  var time = null;

  // JSON response
  var json = null;

  // Query string as object
  queryString = url.parse(request.url, true).query;

  // Extract the iso string query
  var iso = queryString.iso;

  // Form Date object from iso string
  var date = new Date(iso);

  // Resolve and respond
  var path = url.parse(request.url).pathname;

  // Respond to specific requests
  if (path === '/api/parsetime') {

    // Extract the time
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    // Form time object
    time = {hour: hour, minute: minute, second: seconds};

    // Turn object to JSON
    json = JSON.stringify(time);
  }

  else if (path === '/api/unixtime') {

    // Unix epoch time in milliseconds
    var unix = date.getTime();

    // Form object
    time = {unixtime: unix};

    // Turn to JSON
    json = JSON.stringify(time);
  }

  else {
    response.end('Something went wrong');
  }

  // Be a good internet citizen
  response.writeHead(200, {'Content-Type': 'application/json'});

  // Serve it
  response.end(json);
});

// Listen at
server.listen(process.argv[2]);
