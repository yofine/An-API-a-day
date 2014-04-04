var fs = require('fs');

fs.watchFile('/home/yofine/learnspace/example/demo1.txt', function(curr, prev) {
  console.log('the current mtime is: ' + curr.mtime);
  console.log('the previous mtime was: ' + prev.mtime);
});

var foo = fs.unwatchFile('/home/yofine/learnspace/example/demo1.txt')
setTimeout(foo, 3000);