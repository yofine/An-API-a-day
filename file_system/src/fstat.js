var fs = require('fs');

//Asynchronous stat
fs.open('/home/yofine/example/demo1.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  fs.fstat(fd, function (err, stats) {
    if (err) {
      throw err;
    }
    console.log(stats);
    fs.close(fd, function () {
      console.log('Done');
    });
  });
});

//Synchronous stat
var fd = fs.openSync('/home/yofine/example/demo1.txt', 'a');
var stats = fs.fstatSync(fd);
console.log(stats);
fs.closeSync(fd);
console.log('Done');