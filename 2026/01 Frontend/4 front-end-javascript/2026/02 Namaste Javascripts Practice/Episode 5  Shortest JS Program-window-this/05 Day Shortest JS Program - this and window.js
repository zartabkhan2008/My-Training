"use strict"

// 01 this inside global space

console.log(this); // globalObject

/*
The value of this keyword will be global object. in case of browser
this global object is window.

Question: what is the value of this inside global space?
Answer: It is global object that can be different it can be 
window, it can be global it can be something else depends on 
where you are running that peice of code.

Note : this keyword works differently in strict mode and 
non-strict mode.
------------------------------------------------------------*/

// 02 this inside a function
function x(){
    console.log(this)
}
x()

/*
inside function the value of this keywords depends on strict
and non-strict mode.

for strict mode the value will be undefined.
for non strict mode the value will be window.
------------------------------------------------------------*/

// 03 this inside non-strict mode (this-substitution)
/*
if the value of this keyword is undefined or null this keyword 
will be replaced with global object only in non-strict mode
------------------------------------------------------------*/

// 04 this keyword value depends on how the function is called
function y(){
    console.log(this)
}
y()
window.y()
/*
if the function is called without any reference then the value is
undeined, but if call it with reference like this "window.y()"
then it is the calling object means window object.
------------------------------------------------------------*/

// 05 this inside object method
const obj = {
    a : 10,
    z:function(){
        console.log(this.a)
    }
}
obj.z()
/*
first of all what is object method?
if you create a function inside an object this function known
as method, so now x is the method of an object obj.

this.a so this will reference to object and this.a will to that
property a, so it will print 10 because this.a means object
------------------------------------------------------------*/

// 06 call apply bind