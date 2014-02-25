var fs = require('fs');

//Asynchronous stat
fs.stat('/home/yofine/example/demo1.txt', function (err, stats) {
  if (err) {
    throw err;
  }

});

//Synchronous stat 
var stats = fs.statSync('/home/yofine/example/demo1.txt');
console.log(stats);