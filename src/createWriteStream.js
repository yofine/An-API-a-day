var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  var writeStream = fs.createWriteStream('/home/yofine/learnspace/example/output');

  req.pipe(writeStream);

  req.on('end', function () {
    res.writeHead(200, {"content-type":"text/html"});
    res.end('<form method="POST"><input name="test" /><input type="submit"></form>');
  });

  writeStream.on('error', function (err) {
    console.log(err);
  });
}).listen(8080);