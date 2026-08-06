console.log("Start");

setTimeout(function() {   
  console.log("Hello");
}, 2000);

// heavy work
for (let i = 0; i < 10000000000; i++) {} 

console.log("End");

/*
setTimeout is an asynchronous function that runs code after a delay, but the exact timing is not guaranteed.
JavaScript is single-threaded, so it finishes current tasks first.
After the delay, the callback goes into a queue.
It only runs when the call stack is empty. 
*/

/*
setTimeout ek asynchronous function hai jo code ko delay ke baad run karta hai, lekin exact time guarantee nahi hota.
JavaScript single-threaded hai, isliye pehle current code (call stack) complete hota hai.
Delay khatam hone ke baad callback queue me chala jata hai.
Jab call stack empty hota hai tab hi setTimeout ka code run hota hai
*/

