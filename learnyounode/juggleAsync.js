/*
- same probem as http collect in that you need to use http.get()
- will be provided with 3 urls as the first 3 commang line args
- must collect complete content provided by each url and print to
stdout
- print data as a string, one line per url
- must be in same order as the urls provided in the command line args

hints: 
- servers will be out of order
- need to queue the results and keep track of how many urls have
returned their entire contents. once you have them all, you can print
data to the console
- counting callbacks = fundamental ways of managing async in node
- might be more convenient ot rely on 3rd party library such as async
or after.
- constraint for this exercise: don't use external helper lib
*/

var http = require('http');
var bl = require('bl');
var content = []; //create array to hold content of data stream
var counter = 3; // counter to keep track of async calls

for (var i = 0; i < 3; i++) { // iterate through the streams
    (function(index) { // anonymous function
        http.get(process.argv[index + 2], function(response) {
            response.pipe(bl(function (err, data) {
                if (err) { return console.error(err); }
                
                content[index] = data.toString(); // convert all 
                                                // data to string
                counter--; // decrement counter
                if (counter == 0) { // using this counter to prevent
                                    // out of order printing
                    console.log(content[0]);
                    console.log(content[1]);
                    console.log(content[2]);
                }
            }))
        });
    })(i) // use i to bind function so it gets the streams int the
        // correct order
}

//official solution
/*
var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            
            results[index] = data.toString();
            count++;
            
            if (count == 3) {
                printResults();
            }
        }))
    });
}
*/