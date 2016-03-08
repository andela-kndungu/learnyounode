// Does all the magic
var http = require('http');

// Fetch url provided as first argument
http.get(process.argv[2], function(response) {

  // When data comes in
  response.on('data', function(data) {

    // Convert to string and display
    console.log(data.toString());
  });

  // In case of error
  response.on('error', function(error) {

    // Inform user
    console.log('Something went wrong');
  });

  // When it's all over
  response.on('end', function() {

    // It's all over
    return;
  });
});
