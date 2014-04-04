var fs = require('fs');

//Asynchronous lchown
fs.open('/home/yofine/example/demo2.txt', 'a');
fs.lchown('/home/yofine/example/demo2.txt', 1001, 1000, function (err) {
  if (err) {
    throw err;
  }
  console.log('lchown complete');
});