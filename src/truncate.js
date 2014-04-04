var fs = require('fs');

//Asynchronous truncate
fs.open('/home/yofine/example/demo1.txt', 'r+', function (err, fd) {
  if (err) {
    throw err;
  }
  fs.truncate('/home/yofine/example/demo1.txt', 10, function (err) {
    if (err) {
      throw err;
    }
    console.log(fd);
    fs.close(fd, function () {
      console.log('Done');
    });
  });
});

//Synchronous truncate
var fd = fs.openSync('/home/yofine/example/demo1.txt', 'r+');
fs.truncateSync('/home/yofine/example/demo1.txt', 5);
console.log(fd);
fs.close(fd);
console.log('Done');
