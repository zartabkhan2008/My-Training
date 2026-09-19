//                   Hoisting
// Hoisting is a JavaScript mechanism where variable and function declarations are moved or registered in memory before the code is executed

// Example (1)
var c = 10;
function d () {
console.log("Hi Zartab");
}

d();
console.log(c);


// Example (2)
b();
console.log(a);

var a = 10;
function b () {
console.log("Hi Zartab");
}

/* code example 3

y();
console.log(x); 

function y(){
console.log("Hi Zartab");
}
*/

//                           Temporal Dead Zone

// Code Eaample 4

/*
console.log(s);
let s = 10;   
ReferenceError: Cannot access 's' before initialization
Reason

console.log(m);
const m = 10;
ReferenceError: Cannot access 'm' before initialization

console.log(z);
var z = 10

*/