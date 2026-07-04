/* 1) Example
 This process is hoisting

console.log(m);
var m = 10; // Undefined 

console.log(z); // Error
let z = 12;

console.log(n); // Error
const n = 33; */


 /* 2) Example
 Idname();
 console.log(x); // Undefine

 var x = 20;
 function Idname() {
 console.log("Momin Zartab Abubakar");
 } */


/* 3) Example
 fullname(); // print => Momin Mudassir Abubakar
 console.log(n); // n is not defined. 
 console.log(fullname); // print => Momin Mudassir Abubakar

// var n = 30;
 function fullname() {
 console.log("Momin Mudassir Abubakar");
} */


/* 4) Example
classid() // classid is not a function 
console.log(classid);

var classid= function () {
    console.log("Zartab Khan");
} */
