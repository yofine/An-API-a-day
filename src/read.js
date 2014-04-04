var fs = require('fs');
var buffer = new Buffer(100);

//Asynchronous read
fs.open('/home/yofine/learnspace/example/demo1.txt', 'r', function(err, fd) {
  if (err) throw err;
  fs.read(fd, buffer, 0, buffer.length, null, function(err, bytesRead, buffer) {
    if (err) throw err;
    console.log('bytesRead : ' + bytesRead);
    fs.close(fd, function(err) {
      console.log('Complete!');
    });
  });
});

//Synchronous read
var fd = fs.openSync('/home/yofine/learnspace/example/demo1.txt', 'r');
var bytesRead =  fs.readSync(fd, buffer, 0, buffer.length, null);
console.log('bytesRead : ' + bytesRead);
fs.close(fd);