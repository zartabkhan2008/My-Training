//         * Conditional Statements in JavaScript *

// if statement

let age = 18;

if (age >= 18) {
console.log("You can vote");}

// if – else

let agee = 16;

if (agee >= 18) {
console.log("You can vote");
} else {
console.log("You cannot vote");}

// if – else if – else

let marks = 75;

if (marks >= 90) {
console.log("Grade A");
} else if (marks >= 60) {
console.log("Grade B");
} else {
console.log("Fail"); }

//           * Loops in JavaScrip *

// for loop

let name = ["Zartab","Mudassir","Ali","Abbas","Abubakar"]
for (let i= 1; i <= 5 ; i++) {
    console.log(name);
}
   
// While Loop
let correctPassword = "1234";
let userPassword = prompt("Enter your password:");

while (userPassword !== correctPassword) {
  alert("Wrong password, try again");
 userPassword = prompt("Enter your password:");
}

alert("Login successful");

// Do While Loop

let i = 10;

do {
  console.log(i);
} while (i < 5);
