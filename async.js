// Does all the magic
var http = require('http');

// Store all results
var all = [];

// Keep track of additions to array
additions = 0;

// Display elements of array
function printArray(array){

  for (var element of array) {
    console.log(element);
  }
}

// Do fetch store cycle for each argument
for (var i = 2; i < process.argv.length; i++) {

  fetchStore(i);
}

function fetchStore (index) {

  var url = process.argv[index];
  var content = '';

  http.get(url, function(response) {

    response.on('data', function(data) {

      content += data.toString();
    });

    response.on('end', function() {

      all[index - 2] = content;

      additions += 1;

      if (additions >= 3) {

        printArray(all);
      }
    });
  });
}
