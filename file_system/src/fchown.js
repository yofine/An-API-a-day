var fs = require('fs');

//Asynchronous fchown
fs.open('/home/yofine/example/demo1.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  fs.fchown(fd, 1000, 1000, function (err) {
    if (err) {
      throw err;
    }
    console.log(fd);
    fs.close(fd, function () {
      console.log('Done');
    });
  });
});

//Synchronous fchown
var fd = fs.openSync('/home/yofine/example/demo1.txt', 'a');
fs.fchownSync(fd, 1001, 1000);
console.log(fd);
fs.closeSync(fd);
console.log('Done');