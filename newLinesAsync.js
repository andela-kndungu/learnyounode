// To read file
var fs = require('fs');

// Read file provided as argument
fs.readFile(process.argv[2], function(error, data) {

  // Convert buffer to string
  content = data.toString();

  // Get number of new lines
  newLines = content.split('\n').length - 1;

  // Proudly display
  console.log(newLines);
});
