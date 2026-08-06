# Episode 3 : Hoisting

https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID&index=4

```
// code example 1

var x = 7;

function getName(){
    console.log("Namaste JavaScript");
}

getName();
console.log(x);

```

Output:

> Namaste JavaScript

> 7

```
// code example 2

getName();      // in most languages, both lines which are above their declaration will give error. Not in JS though.
console.log(x);

var x = 7;

function getName(){
    console.log("Namaste JavaScript");
}

```

Output:

> Namaste JavaScript

> undefined

```
// code example 3

getName();
console.log(x);

function getName(){
    console.log("Namaste JavaScript");
}

```

Output:

> Namaste JavaScript

> Error: x is not defined // note that not defined here and "undefined" in
> sample 2 are totally different.

- Not defined: We have not initialised the value for variable anywhere in the
  entire code and in memory space.
- Undefined: It is a placeholder that is assigned to a variable by the
  Javascript Engine until the variable is assigned with some other value.

**Hoisting** is a concept which enables us to extract values of variables and
functions even before initialising/assigning value without getting _error_

```

// code example 4

function getName(){
    console.log("Namaste JavaScript");
}

console.log(getName)


```

Output:

> f getName(){

      console.log("Namaste JavaScript);

}

```

// code example 5

getName();
console.log(x);
console.log(getName)

var x = 7;

function getName(){
    console.log("Namaste JavaScript");
}

```

Output:

> Namaste JavaScript

> undefined

> f getName(){

      console.log("Namaste JavaScript);

}

```
// code example 6

console.log(getName)

var getName = function () {
    console.log("Namaste JavaScript");
}

var getName = () => {  // use fat arrow function
    console.log("Namaste JavaScript");
}

```

Output:

> undefined //it is because they behave as variable and not function.

---

**REASON OF WEIRDNESS**

- The answer lies in the Global Exection Context. In the memory phase, the
  variables will be initialized as _undefined_ and functions will get the whole
  function code in their memory.

- This is the reason why we are getting these outputs.
------------------------------------------------------------------------
=> What is hoisting ?
   Hoisting is a process where all variables and functions declarations move top of the table before execution starts.

   var variables are hoisted and initialized with undefined, function declarations are hoisted with their full function body, while let and const are hoisted but not initialized and remain in the Temporal Dead Zone until their actual declaration executes.
   TDZ is the time between when a variable is hoisted and when it is initialized, during which it cannot be accessed.

   Function expressions and arrow functions behave like variables and cannot be accessed before initialization.

   Because of hoisting, we sometimes get undefined for var, errors for let/const, and full access for function declarations.

=> Behavior of var, let, const, functions, and arrow functions

   # var Hoisted + initialized with undefined
       Example:
       console.log(x);  // undefined
       var x = 3;
     JavaScript internally treats it like:
       var x;          // hoisted
       console.log(x); // undefined
       x = 3;          // assignment

   # let and const – Hoisted but not initialized (TDZ)
       Example:
       console.log(a);  // ReferenceError
       let a = 10;
     Because the variable exists in memory but is not yet initialized, this period is called the Temporal Dead Zone (TDZ). 

   # Function Declarations – Fully Hoisted
       Example:
       hello();   // Works
       function hello() {
       console.log("Hi");
       }
     The entire function is stored in memory during the memory phase, so it can be invoked before reaching its line in the 
     code.

   # Function Expressions / Arrow Functions – NOT hoisted like functions
     They behave like variables, not like function declarations.