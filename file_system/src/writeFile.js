var fs = require('fs');

//Asynchronous writeFile
fs.writeFile('/home/yofine/learnspace/example/demo1.txt', 'hello yofine', function(err) {
  if (err) throw err;
  console.log('saved');
});

//Synchronous writeFile
fs.writeFileSync('/home/yofine/learnspace/example/demo1.txt', 'hello yofine');