var fs = require('fs');

//Asynchronous readlink
fs.readlink('/home/yofine/example/demo1_s', function (err, linkString) {
  if (err) {
    throw err;
  }
  console.log(linkString);
});

//Synchronous readlink
var linkString = fs.readlinkSync('/home/yofine/example/demo1_s');
console.log(linkString);