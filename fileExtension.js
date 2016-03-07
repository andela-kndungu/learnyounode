// To read directory
var fs = require('fs');

// To read file extension
var path = require('path');

// Read directory provided as second argument
fs.readdir(process.argv[2], function(error, files) {

  // For every file in directory
  for (var file of files) {

    // If it has extension provided as third argument
    if (path.extname(file) === '.' + process.argv[3]) {

      // Display
      console.log(file);
    }
  }
});
