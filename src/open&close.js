var fs = require('fs');

//Asynchronus open&close
fs.open('/home/yofine/example/demo1.txt', 'a', function (err, fd) {
  if (err) {
    throw err;
  }
  console.log(fd);
  fs.close(fd, function () {
    console.log('Async Done');
  });
});

//Synchronous open&close
var fd = fs.openSync('/home/yofine/example/demo1.txt', 'a');
console.log(fd);
fs.closeSync(fd);
console.log('Sync Done');