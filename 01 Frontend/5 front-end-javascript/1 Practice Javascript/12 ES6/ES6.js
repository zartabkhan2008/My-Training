// 1) Template Literals
let name = "Zartab"
let age = 18
console.log(`My name is ${name} and age is ${age}`)

// 2) Arrow Function
let add = (a,b) => a + b
console.log(add(2,3));

/* 3) destructuring
const  user = {name:"Momin Zartab",age:18}
const {name,age} = user
console.log(name);
console.log(age);*/

// 4) Spread Operator
let arr1 = [2,3,4]
let arr2 = [...arr1,5,6,7]
console.log(arr2);
