var fs = require('fs');

//Asynchronous appendFile
fs.appendFile('/home/yofine/learnspace/example/demo1.txt', 'yofine', function(err) {
  if (err) throw err;
  console.log('Complete');
});

//Synchronous appendFile
fs.appendFileSync('/home/yofine/learnspace/example/demo1.txt', 'yofine');
console.log('Complete');