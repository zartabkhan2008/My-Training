/* 
TDZ (Temporal Dead Zone) ==>
The TDZ is the period when a let or const variable has been hoisted but cannot be accessed before it is initialized. This period is called the Temporal Dead Zone
*/

// --------------------------------------------------------------
// 01) initialized and undefined 
console.log(a);
var a = 10

console.log(b);
let b = 20

console.log(c);
const c = 30

// --------------------------------------------------------------

//02) SyntaxError
/*
let s = 100
var r = 200
const y = 300

let s = 200
var r = 2001
const y = 500

console.log(s);
console.log(r);
console.log(y);
*/

// --------------------------------------------------------------
/*
let z;       
z = 10;      
console.log(z)

const m ;
m = 20
console.log(m);
*/