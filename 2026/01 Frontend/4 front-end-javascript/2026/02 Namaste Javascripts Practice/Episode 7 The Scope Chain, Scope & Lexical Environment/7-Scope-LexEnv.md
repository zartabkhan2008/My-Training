# Episode 7 : Scope and Lexical Environment

https://www.youtube.com/watch?v=uH-tVP8MUs8&list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID&index=8


```
This is why JS is confusing (Case-1)

function a() {
    console.log(b); // surprisingly instead of printing undefined it prints 10. 
    //So somehow this b could access the b outside the fun. 
}

var b = 10;
a();

---------------------

Another case: (Case-2)

function a() {
  c();
  function c() {
  console.log(b); // when cursor comes here, it still prints out 10 somehow!!
  }
 }
 var b = 10;
 a();
 
 --------------------
 
 Another one (DJ KHALED!) (Case-3)
 
 function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); //it prints the right value. How? See ans below Summary part
  }
 }
 
 a();
 console.log(b); // now when cursor comes here, it prints NOT DEFINED!

```

- This is the intuition behind **scope**
- Scope is directly dependent on the lexical environment
- **Lexical Environment** : local memory + lexical env of its parent
- Whenever an EC is created, a Lexical environment(LE) is also created and is referenced in the local EC(in memory space)
- Lexical means hierarchy. In the DJ KHALED (xD) code, function c is lexically inside function a. 
- So in EC of c(), variables and fun in c (none) + reference of lexical env of parent a() is there
- LE of a() in turn is its memory space + reference to LE of parent (Global EC)
- LE of Global EC points to *null*

 ```
    To summarize the above points:
    
    call_stack = [GEC, a(), c()]

    Now lets also assign the memory sections of each execution context in call_stack.

    c() = [[lexical environment pointer pointing to a()]]

    a() = [b:10, c:{}, [lexical environment pointer pointing to GEC]]

    GEC =  [a:{},[lexical_environment pointer pointing to null]]

 ```
  ### For case -3 
  - First JS engine searches for b in local mem of c(). Nothing is there. 
  - So it goes to the reference of Lexical env of parent a(). Here b = 10 is here. So it takes this value, goes back to c() and console prints it.
  - Had b not been in a(), then pointer would have gone to a()'s parent (Global EC and searched there). Had b not been there too, then it goes to LE of global's parent
  which is null. Now JS engine stops and says b is NOT DEFINED. 
  - **Lexical env of c = Local memory of c + LE of A + LE of Global**
  - This process of going one by one to parent and checking is called **scope chain**
  ----------------------------------------------------------------------

  /*
=> What is scope?
   Scope defines where a variable or function can be accessed in your code. 
   JavaScript has two main types of scope:
   
   # Global Scope:
     - Variables declared outside any function are global.
     - They can be accessed from anywhere, even inside functions.

   # Local Scope:
     - Variables declared inside a function are local.
     - They are only accessible within that function and not outside it.

=> what is lexical scope?
   If a child function is inside a parent function, the child can always access 
   the parent's variables this is lexical scope.

=> what is Scope Chain?
   The scope chain is the mechanism JavaScript uses to resolve variable access.

    Example:
    function a(){
    var x = 10
    function b(){
    console.log(x)
    }
    b()
    }
    a()

   When JavaScript tries to access a variable(variable x):
   - It looks inside the current function scope.
   - If not found, it looks into the parent scope.
   - If not found, it checks the next parent, continuing until the global scope.
   - If still not found → ReferenceError.
   This hierarchical linking of scopes, created at the time of code writing 
   (lexical scope), is called the scope chain.
---------------------------------------------------------------------------------------------------------------------------------
   Example of lexical scope:
   # Example 01: let declared in parent → child CAN access it.

   function parent() {
   let x = 50;
   function child() {
   console.log(x);  //  child can access x
   }
   child();
   }
   parent();

   Explanation:
   Because the child is inside the parent, so the child function gets access to the parent’s variables no matter if it's 
   let or var. Lexical scope doesn’t care about var/let/const.
---------------------------------------------------------------------------------------------------------------------------------
   # Example 02: let declared in global → parent & child CAN access it.

   let x = 100;
   function parent() {
   function child() {
   console.log(x);  //  works
   }
   child();
   }
   parent();

   Explanation:
   Because global is the parent of all functions. So child → parent → global.
---------------------------------------------------------------------------------------------------------------------------------
   # Example 03: let declared INSIDE child → parent CANNOT access it

   function parent() {
   function child() {
   let x = 20;
   }
   console.log(x);  //  Error: x is not defined
   child();
   }
   parent();

   Explanation:
   Because parent is outside the child. Lexical scope only allows the child to see the parent's variables, not the other way 
   around.
---------------------------------------------------------------------------------------------------------------------------------
   # Example 04: If you try to use let before it is declared
   
   console.log(a);  //  ReferenceError
   let a = 10;

   Explanation:
   Because let is hoisted but not initialized, so it stays in the Temporal Dead Zone (TDZ).
 
  
  







