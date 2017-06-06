const http = require('http');
const pp = require('./index');
http.createServer(function (req, res) {
    res.writeHead(200, {'cont-type': 'text/plain'});

    req = new pp(req);
    console.log('query');
    console.log(req.post);


    res.end('hello parse-params');

}).listen(3000, function () {
    console.log('listen on port 3000');
});