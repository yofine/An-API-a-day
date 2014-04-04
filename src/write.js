var fs = require('fs');
var buffer = new Buffer('yofine');

//Asynchronous write
fs.open('/home/yofine/learnspace/example/demo1.txt', 'a', function(err, fd) {
  if (err) throw err;
  fs.write(fd, buffer, 0, buffer.length, null, function(err, written, buffer) {
    if (err) throw err;
    console.log( written + 'bytes were written from buffer');
    fs.close(fd, function(err) {
      if (err) throw err;
      console.log('Complete');
    });
  });
});

//Synchronous write
var fd = fs.openSync('/home/yofine/learnspace/example/demo1.txt', 'a');
var written = fs.writeSync(fd, buffer, 0, buffer.length, null);
console.log(written + 'bytes were written from buffer');
fs.closeSync(fd);