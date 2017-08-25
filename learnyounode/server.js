/*
- writing tcp server
- server should listen to TCP connections on the port provided by
first arg to program. 
- for each connection, must write current dat & 24 hour format,
followed by newline char
- month, day, hour and minute must be zero-filled to 2 ints
- close connection after sending string

hints: 
creating raw TCP server -> use net module from Node which has all the
basic networking functions
- net -> net.createServer() that takes a function
- function that you need to pass to net.createServer() is a 
connection listener that is called more than once. 
- every connection received by server triggers anotehr call to the
listener
- listener function has signature 
function listener(socket) { ... }
- net.createServer() returns instance of server
- call server.listen(portNumber) to start listening on particular port

i.e typical node TCP server:
var net = require('net');
var server = net.createServer(function (socket) {
    // socket handling logic
})
server.listen(8000); // use port num supplied to you from first 
command line arg
*/

var net = require('net');
var date = new Date();
var port = process.argv[2]; // first command line arg

function zeroCheck(moment) {
    if (moment < 10) {
        return "0" + moment;
    } else {
        return moment;
    }
}

var month = zeroCheck(date.getUTCMonth() + 1);
var day = zeroCheck(date.getDate());
var hours = zeroCheck(date.getHours());
var min = zeroCheck(date.getMinutes());

var formatDate = date.getFullYear() + '-' + month + "-" + day + " " + 
    hours + ":" + min + '\n';


var server = net.createServer(function (socket) {
    // logic with socket
    socket.write(formatDate);
    socket.end();
});
server.listen(port); // listen to port given


// official solution: 
//var net = require('net');
//
//function zeroFill(i) {
//    return (i< 10 ? '0' : '') + i;
//}
//
//function now() {
//    var d = new Date();
//    return d.getFullYear() + '-' + 
//        zeroFill(d.getMonth() + 1) + '-' + 
//        zeroFill(d.getDate()) + ' ' +
//        zeroFill(d.getHours()) + ':' +
//        zeroFill(d.getMinutes());
//}
//
//var server = net.createServer(function (socket) {
//    sockete.end(now() + '\n');
//});
//
//server.listen(process.argv[2]);