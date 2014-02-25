var fs = require('fs');

//Asynchronous chmod
fs.chmod('/home/yofine/example/demo1.txt', 0777, function (err) {
  if (err) {
    throw err;
  }
  console.log('chmod complete');
});

//Synchronous chmod
fs.chmodSync('/home/yofine/example/demo1.txt', 0777);