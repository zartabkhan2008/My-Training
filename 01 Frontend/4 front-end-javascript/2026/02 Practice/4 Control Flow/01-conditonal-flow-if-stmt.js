// if statement

//case 01 

let number = 13
if (number >= 17) {
console.log("you can vote",+number); // False
}

//case 02 

let userId = 20
if (userId >= 17) {
console.log("you can vote",userId); // True
}


// if else statement

// case 01 : else part execute

let Age = 14;
if (Age >= 17 ) {
console.log("you can vote",Age); 
} 
else{
console.log("you cannot vote"); 
}

// case 02 : if part execute

let Id = 36;
if (Id >= 17 ) {
console.log("you can vote"); 
} 
else{
console.log("you cannot vote"); 
}



// 🔥 1. if-else-if statement

// 👉 Definition:
// if-else-if is used when you want to check multiple conditions, including complex logic like comparisons (>, <, >=, etc.).

// case 01 - if part execute

let count = 99;
let gender ="male";
let country = "IND";
debugger;
if (count >= 99 && gender=="maDle" && country=="INDD" ) {
    console.log("grade A");
} else if (count >= 80){
    console.log("grade B");
}
else if (count >= 70){
    console.log("grade C");
}
else{
    console.log("Invalid Student");
}

// case 02 - else if execute 

let PhysicsMarks = 88

if (PhysicsMarks >= 99) {
    console.log("grade A");
} else if (PhysicsMarks >= 80){
    console.log("grade B");
}
else if (PhysicsMarks >= 70){
    console.log("grade C");
}
else{
    console.log("Invalid Student");
}

// case 03 - else if execute 

let BioMarks = 71

if (BioMarks >= 99) {
    console.log("grade A");
} else if (BioMarks >= 80){
    console.log("grade B");
}
else if (BioMarks >= 70){
    console.log("grade C");
}
else{
    console.log("Invalid Student");
}

// case 03 - else if execute 

let MathsMark = null;

if (MathsMark >= 99) {
    console.log("grade A");
} else if (MathsMark >= 80){
    console.log("grade B");
}
else if (MathsMark >= 70){
    console.log("grade C");
}
else{
    console.log("Invalid Student");
}

// switch case example

// 👉 Definition:
// switch is used when you want to compare one variable against multiple fixed values.

// case 01 

let month = 4;
debugger;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}

// understand diferent swtich and if else if stmt 
let monthNumber = 4;

if (monthNumber === 1) {
    console.log("January");
} else if (monthNumber === 2) {
    console.log("February");
} else if (monthNumber === 3) {
    console.log("March");
} else if (monthNumber === 4) {
    console.log("April");
} else if (monthNumber === 5) {
    console.log("May");
} else if (monthNumber === 6) {
    console.log("June");
} else if (monthNumber === 7) {
    console.log("July");
} else if (monthNumber === 8) {
    console.log("August");
} else if (monthNumber === 9) {
    console.log("September");
} else if (monthNumber === 10) {
    console.log("October");
} else if (monthNumber === 11) {
    console.log("November");
} else if (monthNumber === 12) {
    console.log("December");
} else {
    console.log("Invalid month number");
}

/* ⚡ Difference Between if-else-if and switch

🔹 if-else-if

Can use any type of condition (>, <, >=, ===, etc.)
Becomes messy when code is long
Works for complex logic
May be slower when many conditions are checked
Best for multiple and complex decisions

🔹 switch

Works only with exact match (===)
Clean and structured code
Easy to read even when conditions are many
Generally faster for fixed value checks
Best for menu, days, months, options */