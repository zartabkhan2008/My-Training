// console.log(a)
// var a = 10
// // console.log(b)
// let b = 100

// x()
// function x(){
//     console.log("This is function")
// }



// Hoisting
console.log(m);
n();
s();

var m = 10

function n() {
    console.log("Hello");   
}

var s = function (){
     console.log("Zartab");
 }

// Temporal Dead Zone

console.log(a); 
let a = 10 
console.log(b);
const b = 200
console.log(c);
var c = 15