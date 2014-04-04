var fs = require('fs');

//Asynchronous utimes
fs.utimes('/home/yofine/example/demo1.txt', 1388648321, 1388648321, function (err) {
  if (err) {
    throw err;
  }
  console.log('utime complete');
});

//Synchronous utimes
fs.utimesSync('/home/yofine/example/demo1.txt', 1388648321, 1388648321);