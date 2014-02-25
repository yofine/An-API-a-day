var fs = require('fs');

//Asynchronous futimes
fs.open('/home/yofine/example/demo1.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  fs.futimes(fd, 1388648322, 1388648322, function (err) {
    if (err) {
      throw err;
    }
    console.log('futimes complete');
    fs.close(fd, function () {
      console.log('Done');
    });
  });
});

//Synchronous futimes
var fd = fs.openSync('/home/yofine/example/demo1.txt', 'a');
fs.futimesSync(fd, 1388648322, 1388648322);
fs.closeSync(fd);
console.log('Done');