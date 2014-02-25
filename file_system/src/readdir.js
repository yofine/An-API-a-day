var fs = require('fs');

//Asynchronous readdir
fs.readdir('/home/yofine/example', function (err, files) {
  if (err) {
    throw err;
  }
  console.log(files);
});

//Synchronous readdir
var files = fs.readdirSync('/home/yofine/example');
console.log(files);
