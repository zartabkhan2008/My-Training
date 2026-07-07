// 1) Normal Function
name ();
function name() {
    console.log("Hi Zartab");
}
name();

// 2) Function Expression ==> A function is stored inside a variable.
// fullname(); ==> Error
let fullname = function () {
    console.log("Hi Mudassir");
}
fullname();

// 3) Anonymous Function
// An anonymous function is a function without a name.
let idname = function () {
    console.log("Hi Mudassir");
}
idname();

// 4) This is Named Function Expression
/* let greet = function sayHello() {
    console.log("Hello");
   }; */

// 5) Difference betwen parameters and arguments
function value(a,b) // This is parameters
{
    console.log(a+b);
}
value(5,22) // This is arguments



/*
Youtube - https://www.youtube.com/watch?v=SHINoHxvTso

🔹 What is an Arrow Function?

👉 An Arrow Function is a shorter way to write functions in JavaScript.
👉 It was introduced in ES6 (ECMAScript 2015)
👉 It uses the => symbol

🔹 Normal Function vs Arrow Function

✅ Normal Function

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

✅ Arrow Function

const add = (a, b) => {
    return a + b;
}
console.log(add(2, 3)); // 5

👉 Both do the same thing, but arrow function is shorter.

🔹 Different Syntax Cases

1. No Parameter

const hello = () => {
    console.log("Hello World");
};
hello();

2. Single Parameter

const square = x => x * x;

console.log(square(5)); // 25

3. Multiple Parameters

const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20

👉 If there is only one parameter, () are optional.

🔹 Important Concept: this keyword

👉 Biggest difference is how this works

Normal Function

const obj = {
    name: "Zartab",
    show: function() {
        console.log(this.name);
    }
};

obj.show(); // Zartab

Arrow Function

const obj = {
    name: "Zartab",
    show: () => {
        console.log(this.name);
    }
};
obj.show(); // undefined ❌

👉 Arrow functions do not have their own this
👉 They use this from the parent (outer) scope

🔹 Example of this in Arrow Function (Correct Usage)

👉 Arrow function uses parent scope this
👉 So we use it inside another function, not directly in object

✅ Example 1: Inside Normal Function

const person = {
    name: "Zartab",

    show: function () {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};

person.show(); // Zartab ✅

🔥 Explanation
show() is a normal function
So this = person
Arrow function inner() inherits this
That’s why it prints "Zartab"

❌ Wrong Way (Direct Arrow in Object)

const person = {
    name: "Zartab",

    show: () => {
        console.log(this.name);
    }
};

person.show(); // undefined ❌

👉 Because arrow function does NOT create its own this

🔹 When to Use Arrow Functions?

✅ For short functions
✅ For callbacks (map, filter, etc.)
✅ For clean and modern code

🔹 When NOT to Use?

❌ Inside object methods (because of this)
❌ As constructor functions
❌ When you need dynamic this

*/

