/*
write a program that performs http get request to a url provided as 
the first command line arg
- collect all data from server (not just first data event), then 
write 2 lines to stdout

- first line to write should be integer representing number of chars
received from server. 2nd line contains complete String of chars
sent by server

approaches: 
1) collect data across multiple 'data' events and append the results
together prior to printing the output. use the 'end' event to 
determine when teh stream is finished and you can write the output

2) use 3rd-party package to abstract difficulties involved in 
collecting an entire stream of data. 2 different packages provide
useful API for solving this problem: bl (buffer list) & concat-stream
*/

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
//    response.setEncoding('utf8'); // unsure if this does anything bc
                                // .toString() is used later on
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
});

//official solution: 
/*
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
//i.e same as my solution
*/