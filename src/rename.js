var fs = require('fs');

//Asynchronous rename
fs.rename('/home/yofine/example/demo.txt', '/path/demo1.txt', function (err) {
  if (err) {
    throw err;
  }
  console.log('renamed complete');
});

//Synchronous rename
fs.renameSync('/home/yofine/example/demo.txt', '/path/demo1.txt');