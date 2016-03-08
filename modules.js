// Will pass a list of files to callback
var filter = require('./filter.js');

// List files in directory third argument having fourth argument file extension
filter(process.argv[2], process.argv[3], function(error, files) {

  // Unsuccessful, inform user
  if (error) {
    console.log('Sorry, something went wrong');
    return;
  }

  for (var file of files) {

    // Display, each on a new line
    console.log(file);
  }
});
