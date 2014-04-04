var fs = require('fs');

//Asynchronous lstat
fs.lstat('/home/yofine/example/demo1.txt', function (err, stats) {
  if (err) {
    throw err;
  }
  console.log(stats);
});

//Synchronous lstat
var stats = fs.lstatSync('/home/yofine/example/demo1.txt');
console.log(stats);