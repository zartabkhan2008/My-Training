// Loops can execute a block of code a number of times.

/* ✅ For Syntax:

1. for Loop

for(initialization; condition; increment\/decrement)

📌 Use:

When you know exact number of times loop should run.

⭐ Key Point:

Best for counting
Clean for fixed repetition

*/

// example 01 

let num = 2; // input
for (let i = 1; i <= 10; i++) // number of times.
{
    console.log(num + " x " + i + " = " + (num * i));  // block of code
}

// example 02 

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/* 🔁 2. while Loop Syntax

✅ Syntax:

while (condition) {
    // code to run
}

📌 Use:

When you don’t know exact number of iterations.

⭐ Key Point:

Condition checked before running
Can run 0 times if condition false

*/

let number = 4;
let j = 1; // initialization
while (j <= 10) // condition
{
    console.log("print 4 table", number * j);  // block of code
    j++; //increment/decrement

}

/* 🔁 3. do...while Loop Syntax
✅ Syntax:

do{ } while(condition)

📌 Use:

When you want loop to run at least 1 time

⭐ Key Point:

Runs at least once
Condition checked after execution

    */


let k = 1; // initialization
debugger;
do {
    console.log("6 x " + k + " = " + (6 * k));
    k++; //increment/decrement
} 

while (k <= 10); // condition

