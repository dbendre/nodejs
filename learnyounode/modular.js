/*
// introduces concept of modules, need to create 2 files to solve
- program prints list of files in a given directory, filtered by file extension
- first arg = dir name
- 2nd arg = extension filter
print list of files (one file per line) to console; use asynchronous i/o
- write module file to do most of the work
module exports single function taking 3 args: dir name, filename exension string, callback function
- filename extension arg must be same as what was passed to your program, don't turn it into a regexp or prefix with "." -> just pass it in

callback = function callback(err, data)
data = filtered list of files as an Array

- if err from call to fs.readdir(), callback must be called with error and only the error as the first arg

must print from original file
if error happens in original program file, check for it and print informative message to console

1. export single function w/ exact args
2. call callback exactly once with erorr or some data as described
3. don't change anything else, like global vars or stdout
4. handle all errors that may occur and pass them to callback
*/


/*
var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files) {
    if (err) return console.error(err);
    
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    })
}); // from previous
*/

var runMyMod = require('./mymod.js');
var dirName = process.argv[2];
var fileExt = process.argv[3];

runMyMod(dirName, fileExt, function (err, data) {
  if (err) {
    return console.error(err);
  }

  data.forEach(function (file) {
    console.log(file);
  })
})
