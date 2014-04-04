var fs = require('fs');

//Asynchronous chown
fs.chown('/home/yofine/example/demo1.txt', 1001, 1000, function (err) {
  if (err) {
    throw err;
  }
  console.log('chown complete');
});

//Synchronous chown
fs.chownSync('/home/yofine/example/demo1.txt', 1000, 1000);