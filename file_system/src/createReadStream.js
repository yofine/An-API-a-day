var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

  var filename = '__dirname+req.url';

  var readStream = fs.createReadStream(filename);

  readStream.on('open', function () {
    readStream.pipe(res);
  });

  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(8080);