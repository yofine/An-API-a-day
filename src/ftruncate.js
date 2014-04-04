var fs = require('fs');

//Asynchronous ftruncate
fs.open('/home/yofine/example/demo1.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  fs.ftruncate(fd, 50, function (err) {
    if (err) {
      throw err;
    }
    console.log(fd);
    fs.close(fd, function () {
      console.log('Done');
    });
  });
});

//Synchronous ftruncate
var fd = fs.openSync('/home/yofine/example/demo1.txt', 'a');
fs.ftruncateSync(fd, 50);
console.log(fd);
fs.closeSync(fd);
console.log('Done');