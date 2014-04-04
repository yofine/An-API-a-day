var fs = require('fs');

//Asynchronous unlink
fs.unlink('/home/yofine/example/demo2.txt', function (err) {
  if (err) {
    throw err;
  }
  console.log('unlink complete');
});

//Synchronous unlink
fs.unlinkSync('/home/yofine/example/demo2.txt');