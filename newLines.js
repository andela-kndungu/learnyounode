// To read files
var fs = require('fs');

// File is the third argument
contentsBuffer = fs.readFileSync(process.argv[2]);

// Get as string
contentsString = contentsBuffer.toString();

// Split along new lines
contentsArray = contentsString.split('\n');

// New lines are one less the array length
console.log(contentsArray.length - 1);
