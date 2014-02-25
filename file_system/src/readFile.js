var fs = require('fs');

//Asynchronous readFile
fs.readFile('/home/yofine/learnspace/example/demo1.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
})

//Synchronous readFile
var data = fs.readFileSync('/home/yofine/learnspace/example/demo1.txt');
console.log(data);