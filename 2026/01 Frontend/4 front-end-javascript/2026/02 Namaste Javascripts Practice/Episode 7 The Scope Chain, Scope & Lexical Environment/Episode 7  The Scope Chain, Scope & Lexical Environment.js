/* ------------------------------------------------------------
01) what is Scope ?
Scope defines where a variable can be accessed in a JavaScript program.
--------------------------------------------------------------*/

/* 02) Global Scope
==>Global scope means a variable can be accessed from anywhere in the program, for example, from inside a function as well as outside a function */

let x = 10; 

function test() {
    console.log(x);
}

test();
console.log(x);
/* ------------------------------------------------------------*/

/* 03)Local Scope 
==>Local scope means a variable can be accessed only inside the function where it is declared. */

function test() {
let s = 10; 
console.log(s); 
}

test();
console.log(s); // Error 
/* ------------------------------------------------------------*/

/* 04)Lexical Scope
==>A child function can access the variables of its parent function. This behavior is called lexical scope
*/

let z = 10

function parent() {
    let y = 20;

    function child() {
        console.log(z);
        console.log(y);
    }

    child()
}

parent()
/* ------------------------------------------------------------*/

/* 05)Scope chain
01) When JavaScript tries to access a variable, it first checks the current scope.
02) If the variable is not found there, it checks the parent/outer scope.
03) If it is still not found, it continues searching up to the global scope.
04) This searching process is called the Scope Chain
*/

let a = 10; // Global scope

function parent() {
let b = 20; // Parent scope

function child() {
let c = 30; // Child scope

console.log(c);
console.log(b);
console.log(a);
}

child();
}

parent();