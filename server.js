var http = require('http');

var port = process.env.port || 8080;
var server = http.createServer(function(req, resp) {
    resp.writeHead(200);
    resp.end('Hello. Welcome to the Heroku World.')
});
server.listen(port);
