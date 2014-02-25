var fs = require('fs');

//Asynchronous link
fs.link('/home/yofine/example/demo1.txt', '/home/yofine/example/demo1_h', function (err) {
  if (err) {
    throw err;
  }
  console.log('hardlink complete');
});

//Synchronous link
fs.linkSync('/home/yofine/example/demo1.txt', '/home/yofine/example/demo1_h');