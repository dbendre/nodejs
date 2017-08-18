/*
- function can be declared to receive any number of args
- args can by any type
- string,  number, array, object, other functions, etc

ex) 
function example (firstArg, secondArg) {
    console.log(firstArg, secondArg);
}

call like so: 
example('hello', 'world');

above example will print hello world to terminal
*/

function math (arg1, arg2, arg3) {
    return ((arg2 * arg3) + arg1);
}

console.log(math(53, 61, 67));