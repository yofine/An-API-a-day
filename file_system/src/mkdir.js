var fs = require('fs');

//Asynchronous mkdir
fs.mkdir('/home/yofine/example/demo_dir', function (err) {
  if (err) {
    throw err;
  }
  console.log('mkdir complete');
});

//Synchronous nkdir
fs.mkdir('/home/yofine/example/demo_dir');