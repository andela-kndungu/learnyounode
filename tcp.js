// For networking functionality
var net = require('net');

// Create server
server = net.createServer(function(socket) {

  // Current time
  var now = new Date();

  // Year as string
  var year = now.getFullYear();

  // Zero filled month
  var month = now.getMonth() + 1;
  if (Number(month) < 10) {
    month = '0' + month;
  }

  // Zero filled day
  var day = now.getDate();
  if (Number(day) < 10) {
    day = '0' + day;
  }

  // Zero filled hour
  var hour = now.getHours();
  if (Number(hour) < 10) {
    hour = '0' + hour;
  }

  // Zero filled minutes
  var minutes = now.getMinutes();
  if (Number(minutes) < 10) {
    minutes = '0' + minutes;
  }

  // Form final string
  var date = year + '-' + month + '-' + day;
  var time = hour + ':' + minutes;
  var fullDate = date + ' ' + time + '\n';

  // Send data to the requesting sockket
  socket.write(fullDate);

  // Close connection
  socket.end();
});

// Receive requests from the specified port
server.listen(process.argv[2]);
