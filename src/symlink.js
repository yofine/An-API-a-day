var fs = require('fs');

//Asynchronous symlink
fs.symlink('/home/yofine/example/demo1.txt', '/home/yofine/example/demo1_s', function (err) {
  if (err) {
    throw err;
  }
  console.log('symlink complete');
});
 
//Synchronous symlink
fs.symlinkSync('/home/yofine/example/demo1.txt', '/home/yofine/example/demo1_s');