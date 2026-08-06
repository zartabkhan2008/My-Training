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



function Studentname(Callback) {
    console.log("Momin Zartab Abubakar");
    Callback() //idcard callback main pass hoyega
}
function idcard(params) {
    console.log("26");
}
Studentname(idcard);

/*
Jis function me dusra function pass karte hain, us function me usko parameter ke through receive karke call karna hota hai 
*/

/*
When you pass a function into another function, you receive it as a parameter and then call it inside that function 
*/
