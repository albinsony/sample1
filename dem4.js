var http= require('http');
http.createServer(function(req,resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write('hello world');
    resp.end();
}).listen(8080);

console.log('server is running');
