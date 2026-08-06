let a = 5;
let b = 10;
console.log(a + b);

/*
👉 1. Parsing

Engine code ko read karta hai
let, a, =, 5 → tokens
AST ban jata hai

👉 2. Compilation

AST → bytecode ban gaya
Code run ke liye ready

👉 3. Execution

a = 5, b = 10 memory (heap) me store
a + b calculate hua
Output → 15
Call stack me console.log execute hua

👉 4. Optimization

Agar ye code baar-baar chale
V8 ise fast bana deta hai */


/*
JavaScript code is first parsed to create an AST. Then the engine converts it into bytecode. During execution, the code runs using the call stack and memory heap. If the code runs frequently, the JIT compiler optimizes it to make it faster.
*/

/*
JavaScript code pehle parse hota hai jisse AST banta hai. Phir engine bytecode generate karta hai. Execution ke time V8 engine us code ko run karta hai using call stack aur memory heap, aur frequently used code ko JIT compiler optimize kar deta hai
*/