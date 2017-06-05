const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,{'cont-type':'text/plain'});

    var get_params = url.parse(req.url, true).query;
    console.log(get_params);

    res.end('hello parse-params');

}).listen(3000,function () {
    console.log('listen on port 3000');
});