/*
- can access command line args via global process object
- has argv project which is an array containing complete command line i.e process.argv

need to think about how to loop through number of args so you can output their sum
- first element = node
- 2nd element = path to your js file
need to start at 3rd element
note: all elements of process.argv are strings, may need to convert to ints
- prefix using + or apssing it to Number() -> +process.argv[2] or Number(process.argv[2])
*/

//console.log(process.argv);

var sum = 0;

for (var i = 2; i < (process.argv).length; i++) {
    sum += Number(process.argv[i]);
}

console.log(sum);