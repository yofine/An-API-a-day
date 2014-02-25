var fs = require('fs');

//Asynchronous exists
fs.exists('/home/yofine/learnspace/example/demo1.txt', function(exists) {
  console.log(exists ? 'exists' : 'not exists');
})

//Synchronous exists
var exists = fs.existsSync('/home/yofine/learnspace/example/demo1.txt');
console.log(exists ? 'exists' : 'not exists');