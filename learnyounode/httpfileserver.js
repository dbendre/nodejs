/*
- http server that serves the same text file for each request it 
receives
- server should listen on the port provided by the first arg to
your program
- will be provided w/ location of the file to serve as the second
command-line arg
- use fs.createReadStream() method to stream the file contents to 
the response

hints: 
- need to create http server (not tcp), use http module from Node core
- http.createServer() - takes callback that is called once for each
connection received by server
function callback(request, response) {...}
- the 2 args are objects representing the http request and the
corresponding response for this request.
- request used to fetch properties, such as header and query-string
from the request while response is for sending data to the client,
both headers and body
- both request and response are also Node streams -> can use streaming
abstractions to send and receive data if they suit your use-case

http.createServer() also returns an instance of your server must
call server.listen(portNumber) to start listening on a particular
port: 

var http = require('http');
var server = http.createServer(function (req, res) {
    // request handling logic
});
server.listen(portNumber);

- fs core module also has some streaming APIs for files
- need to use fs.createReadStream() method to create a stream
representing the file you are given as a command line argument
- method returns stream object which you can use src.pipe(dst) 
to pipe the data from the src stream to the dst stream
- can connect filesystem stream with http response stream
*/

var http = require('http');
var fs = require('fs');

var portNum = process.argv[2];
var file = process.argv[3]; // file to serve

var stream = fs.createReadStream(file); // creating a stream with
// the file's contents

var server = http.createServer(function (request, response) {
    stream.pipe(response); // pipe the response to the stream 
});
server.listen(portNum);


//official solution: 
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    
    fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));