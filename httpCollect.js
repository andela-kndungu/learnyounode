// Does the magic
var http = require('http');

// Fetch stream
http.get(process.argv[2], function (response) {

  var stream = "";

  // When data comes in
  response.on('data', function(data) {

    // Turn to string and concat to current
    stream += data.toString();
  });

  // When done
  response.on('end', function() {

    // Display length of string
    console.log(stream.length);

    // Display string
    console.log(stream);
  });
});
