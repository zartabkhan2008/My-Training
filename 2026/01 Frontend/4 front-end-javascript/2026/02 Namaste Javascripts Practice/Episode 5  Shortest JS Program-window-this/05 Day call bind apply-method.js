// 01 call method

let name = {
    firstName : "Naqeem",
    lastName : "Khan"
}

let printFullName = function(city,state) {
console.log(this.firstName + ' ' + this.lastName + " from " + city + ' ' +state)
}

printFullName.call(name, "Bhiwandi", "Maharashtra")

/*
We can borrow a function and use it with another object.\

call() method:
Immediately calls the function.
Arguments are passed one by one
-------------------------------------------------------------------------*/

// 02 apply method

let name2 = {
    firstName : "Raza",
    lastName : "Khan"
}

let printName = function(city,state) {
console.log(this.firstName + ' ' + this.lastName + " from " + city + ' ' +state)
}

printName.apply(name2, ["Mumbai", "Maharashtra"])

/*
We can borrow a function and use it with another object.\

apply() method:
Immediately calls the function.
Arguments are passed in array
-------------------------------------------------------------------------*/

// 03 bind method

let obj = {
    firstName : "Mohammad",
    lastName : "Momin"
}

let printMyName = printName.bind(obj, "Pune", "Maharshtra")
printMyName()

/*
bind method:
Does NOT call immediately.
Returns a new function
*/