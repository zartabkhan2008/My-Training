//                      * Array  *

// Push and Pop ===> used for Ending
let number = [10,20,30,40,]
number.push(50) // ==> Add
number.pop() //  ==> Remov
console.log(number);

// Shift and Unshift ==> used for Starting

let idname = ["Mudassir","Zartab","Abubakar","ali"]
idname.shift() // ==> Remov
idname.unshift("Ramzan") // ==> Add
console.log(idname);

//splice() ==> Used for remove and add 
let name = ["Zartab","Mudassir","Ali","Arman"]
name.splice(1,2)
name.splice(1, 0, "salam");
console.log(name);

// Slice

// Concat

let m = [10,20,30,40,50]
let z = [60,70,80,90,100]
let n = m.concat(z)
console.log(n);

//                    * Array Method *

// .map
const arr = [1,2,3]
const result = arr.map(x => x * 5)
console.log(result)

// .filter
const arra = [1,2,3,4,5,6,7,8,9,10]
const Result = arra.filter(x => x % 3 === 0)
console.log(Result)

// .find
const Array = [20,30,40,50,60]
const results = Array.find (x => x > 45)
console.log(results);