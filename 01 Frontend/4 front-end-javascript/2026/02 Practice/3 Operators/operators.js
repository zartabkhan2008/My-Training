//                 * Arithmetic Operators *

// +, -, *, /, %
let a = 10
let b = 5

console.log(a+b); // Addition
console.log(a-b); // subtraction
console.log(a*b); // miltiplication
console.log(a/b); // Division
console.log(a%b); // Modulus

//                 * Assignment Operators *
let m = 5
let z = 10

console.log(m+=z); 
console.log(m-=z); 
console.log(m*=z);
console.log(m/=z);
console.log(m%=z);

//                 * Comparison Operators * 
// 1. Equal (==)
console.log(5 == 5);      // true
console.log(5 == "5");   // true (sirf value check)

// 2. Strict Equal (===)
console.log(5 === 5);    // true
console.log(5 === "5");  // false (value + type)

// 3. Not Equal (!=)
console.log(5 != 3);     // true
console.log(5 != "5");   // false

// 4. Strict Not Equal (!==)
console.log(5 !== 3);    // true
console.log(5 !== "5");  // true

// 5. Greater Than (>)
console.log(10 > 5);     // true
console.log(5 > 10);     // false

// 6. Less Than (<)
console.log(5 < 10);     // true
console.log(10 < 5);     // false

// 7. Greater Than or Equal (>=)
console.log(10 >= 10);   // true
console.log(9 >= 10);    // false

// 8. Less Than or Equal (<=)
console.log(5 <= 5);     // true
console.log(6 <= 5);     // false


//                 * Logical Operators *
// AND (&&)
console.log(10 > 5 && 5 < 10);   // true  (dono condition true)
console.log(10 > 5 && 5 > 10);   // false (second condition false)

// OR (||)
console.log(10 > 20 || 5 < 10);  // true  (ek condition true)
console.log(10 > 20 || 5 > 10);  // false (dono condition false)

// NOT (!)
console.log(!true);              // false (true ka ulta)
console.log(!false);             // true  (false ka ulta)