var fs = require('fs');

//Asychronous fchmod
fs.open('/home/yofine/example/demo1.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  fs.fchmod(fd, 0777, function (err) {
    if (err) {
      throw err;
    }
    console.log(fd);
    fs.close(fd, function () {
      console.log('Done');
    });
  });
});

//Synchronous fchmod
var fd = fs.openSync('/home/yofine/example/demo1.txt', 'a');
fs.fchmodSync(fd, 0777);
console.log(fd);
fs.close(fd);
console.log('Done');