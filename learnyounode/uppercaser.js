/*
- write http server that receives only POST requests and converts
incoming POST body characters ot upper-case and returns it to the
client
- server should listen on the port provided by the first arg to 
your program
- easier to use packages to transform stream data as it's passing
through
- i.e through2-map package w/ its simple API
- allows you to create a transform stream using only a single
function that takes a chunk of data and returns a chunk of data
- designed to work much like Array#map() but for streams

var map = require('through2-map');
inStream.pipe(map(function (chunk) {
    return chunk.toString().split('').reverse().join('');
})).pipe(outStream);

- incoming data from inStream is converted to a String (if it isn't
already), the characters are reversed and the result is passed 
through to outStream
*/