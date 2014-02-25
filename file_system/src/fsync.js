var fs = require('fs');

//Asynchronous fsync
fs.open('/home/yofine/learnspace/example/demo2', 'a', function(err, fd) {
  if (err) throw err;
  fs.fsync(fd, function(err) {
    if (err) throw err;
    fs.close(fd, function(err) {
      if (err) throw err;
      console.log('Complete!')
    });
  });
});

//Synchronous fsync
var fd = fs.openSync('/home/yofine/learnspace/example/demo2', 'a');
fs.fsyncSync(fd);
fs.closeSync(fd);
