"use strict"

// 01 Global Space
console.log(this);

// 02 this inside a function 
function x () {
    console.log(this);
}
x();

// 03 this keyword value depends on how the function is called
function z () {
    console.log(this);
}
window.z();


// 04 this inside object method
const object = {
    name : "Momin Zartab ",
    n: function () {
        console.log(this.name);
    }
}
object.n()