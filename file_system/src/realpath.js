var fs = require('fs');
var cache = {'/example': '/home/yofine/example'};

//Asynchronous realpath
fs.realpath('/example/demo1_s', cache, function (err, resolvedPath) {
  if (err) {
    throw err;
  }
  console.log(resolvedPath);
});

//Synchronous realpath
var resolvedPath = fs.realpathSync('/example/demo1_s', cache);
console.log(resolvedPath);