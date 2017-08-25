/*
program that performs HTTP GET request to a URL provided to you as the first command line arg
- write the string contents of each "data" even from the response to a new line on stdout

hints: 
- need to use the http core module
- http.get() is a shortcut for simple GET requests, use it to simplify solution
- first arg to http.get() can be the URL you want to GET; provide callback as the second arg

signature of callback: 
function callback(response) {...}
- reponse is a node stream object; can treat it as objects that emit events
3 events that are of most interest: data, error, end
** listen to an event like so: 
    response.on("data", function (data) {... });
note: 
- data event is emitted when chunk of data is available and can be processed
- size of chunk depends upon underlying data source

- response object/ stream retrieved frrom http.get() also has setEncoding() method. if you call this method w/ "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to String
*/

var http = require('http');
var dir = process.argv[2]; 

http.get(dir, function callback(response) {
    response.setEncoding('utf8'); // need to set this before callback
                                // otherwise this comes in too late
    response.on("data", function (data, err) {
        if (err) {
            return console.error(err);
        }
            console.log(data);
        });
    });


/*official solution*/

var http = require('http');

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error);