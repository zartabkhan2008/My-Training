 for (let i = 1; i <= 6 ; i++) {
    console.log("*".repeat(i));
} 

/*  * Definition for loop*

 A for loop is used to access data using an index (0, 1, 2, ...).

* When do we use it *

1) When we need the index
2) When we want to control the loop (forward, backward, skip)
3) When we need data from a specific position */


/*  * Definition for of loop*

 A for...of loop is used to get direct values one by one from data.

* When do we use it *

1) When we only need values
2) When we want simple code
3) Easy for beginners */

let arr = [10,20,30]
for (const num of arr) {
    console.log(num); }

/* 2) Spread operator */

let no1 = [10,20]
let no2 = [...no1,30,40]
console.log(no2);

let name ="Momin Zartab"
let fullname = [...name, " Abubakar  "]
// let newname = name.concat(fullname)
console.log(fullname);

//      * Destructuring assignment *

const person = {name: "Alice", age: 20};
const {name, age} = person;
console.log(name, age);