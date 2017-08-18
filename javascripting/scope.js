/*
- scope = set of vars, objects, functions you have access to
- js has 2 scopes: global and local
- variable that is declared outside function defintion is global, it's value is accessible and modifiable throughout your program
- variable declared inside function definition is local
-- created and destroyed every time function is executed, cannot be accessed by any code outside the function
- nested functions have access to their parent function's scope

var a = 4; // a = global variable, can be accessed by functions below

function foo() {
    var b = a * 3; // b can't be accessed outside foo, can be accessed by functions defined in foo
    
    function bar(c) {
        var b = 2; // another 'b' variable is created inside bar
                    // changes to this new 'b' don't affect the old 'b'
        console.log(a, b, c);
    }
    
    bar(b*4);
}

foo(); // 4, 2, 28

ex) 
(function() { // function expression is surrounded by parens
    // vars defined here
    // can't be accessed outside
    })(); // function immediately invoked.
*/

var a = 1, b = 2, c = 3;

(function firstFunction() {
    var b = 5, c = 6;
    
    (function secondFunction() {
        var b = 8;
        console.log("a: " + a + ", b: " + b + ", c: " + c);
        
        (function thirdFunction() {
            var a = 7, c = 9;
            
            (function fourthFunction() {
                var a = 1, c = 8;
            })();
        })();
    })();
})();