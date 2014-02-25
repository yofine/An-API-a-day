var fs = require('fs');

//Asynchronous rmdir
fs.rmdir('/home/yofine/example/demo_dir', function (err) {
  if (err) {
    throw err;
  }
  console.log('rmdir complete');
});

//Synchronous rmdir
fs.rmdirSync('/home/yofine/example/demo_dir');