/*
goal: program that uses singls asynchronous filesystem operation to 
read a file and print the number of newlines it contains to stdout, similar
to running cat file | wc -l

solution almost same as previous problem but now use the node.js way: asynchronous

use: fs.readFile() and collect value from a callback function that is passed in as the 2nd arg
note: callbacks = executed asynchronously i.e at a later time

simple SYNCHRONOUS example 
var myNum = 1;
function addOne() {myNumber++; } // define the function
addOne(); //run the function
console.log(myNumber); //logs out 2

asynchronous example: reading number from number.txt
var fs = require('fs'); // require is aspecial function provided by node
var myNumber = undefined; // dunno what the number is since it's stored ina file

function addOne() {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents);
        myNumber++;
        callback();
    })
}

function logMyNumber() {
    console.log(myNumber);
}

addOne(logMyNumber; 
console.log(myNumber); // lgos out undefined -- line gets run before readFile is done

// typical callback has the signature
function callback(err, data) {...}
** check if eror occurred by checking if the first argument is truthy? 
* if no error, have Buffer object as the 2nd argument

*/

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
    if(err) {return console.log("error");}
    
    var count = data.split("\n").length - 1;
    console.log(count);
})