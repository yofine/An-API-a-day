var fs = require('fs');

fs.watch('/home/yofine/learnspace/example/demo1.txt', function(event, filename) {
  console.log(event);
  console.log(filename);
});