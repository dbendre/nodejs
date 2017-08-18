/*
goal: write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to stdout, similar to running cat file | wc -l

full path to the file to read is provided as the first command line arg; you don't need to make your own test file

hints: to perform file system operation you need the fs module from the node core library

all synchronous/ blocking filesystem methods in the fs module end with 'Sync'
- to read file, need to use: 
fs. readFileSync('/path/to/file') // returns Buffer object containing complete contents of the file

Buffer objects = efficintly represent arbitrary arrays of data, whether it's ascii, binary or some other format.
Buffer objects can be converted to strings by simply calling the toString() method on them
    var str = buf.toString()
    
to look fora n easy way to count number of newlines in string, call str.split() where \n can be used as delimeter 
note: test file doesn't have newline cahracter at end of last line, using this method, you'll end up with an array that has one more element than the number of newlines
*/

var fs = require('fs'); // have full fs module available in a variable named fs

//var fileLocation = (process.argv[2]).toString(); // don't need to do this

var newLines = fs.readFileSync(process.argv[2]);
var count = newLines.toString().split('\n').length - 1; // can chain methods
console.log(count);

/*
NOTE: you can avoid the .toString() by passint 'utf8' as the
second arg to readFileSync, then you'll get a String

fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/

//console.log("length: " + newLines.length);
//newLines = newLines.split('\n');

//console.log(typeof(newLines));
//var count = 0; // don't need a count variable and for loop either, can just use length - 1;
//for (var i = 0; i < newLines.length; i++) {
//    count++;
//}
//
//count -= 1; // subtract 1 bc there's no newline at the end of the file

