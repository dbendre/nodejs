/*
- program that prints list of files in a given directory, filetered by the extension of the flies
-provided a directory name as the first argument ot your program and a file extension to filter by as the second argument
- second arg is not prefixed with a dot, you need to add that in
*/

//var fs = require('fs');
//
//fs.readFile(process.argv[3], 'utf8', function callback(err, data) {
//    if(err) {return console.log("error");}
//    
//    var count = data.split("\n").length - 1;
//    console.log(count);
//})



var fs = require('fs');
var path = require('path');
var pathname = process.argv[2];


fs.readdir(process.argv[2], function callback(err, list) {
//    if (err) { return console.log('error'); }
    
    // need to print on newlines
    for (var i = 0; i<list.length; i++) {
        if (("." + process.argv[3].toString()) === path.extname(list[i])) {
            console.log(list[i]);
        }
//        console.log(path.extname(list[i]));
//        console.log(process.argv[3]);
    }
});