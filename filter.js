// To read directory
var fs = require('fs');

// To read file extension
var path = require('path');

// The function exported
module.exports = function(directory, extension, callback) {

  // Get all files in directory
  fs.readdir(directory, function(error, files) {

    // Call callback with error if something went wrong
    if (error) {

      return callback(error, null);
    }

    // Alls good, filter the files
    filtered = [];

    for (var file of files) {

      if (path.extname(file) === '.' + extension) {

        filtered.push(file);
      }
    }

    // Call callback with the results
    callback(null, filtered);
  });
};
