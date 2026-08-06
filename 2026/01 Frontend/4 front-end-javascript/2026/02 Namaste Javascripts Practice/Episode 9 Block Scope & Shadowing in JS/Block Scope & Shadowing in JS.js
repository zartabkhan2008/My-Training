//                * Block Scope *
{
let a = 10;
var b = 20;
const c = 30 ;
}

console.log(b);
console.log(a);
console.log(c);

/*
1) let and const → They work only inside the block { } where they are created.
2) var → It does not follow block rules, so you can use it outside the block also.
*/

//                     * Shadowing *

let x = 10
{
    let x = 20 // hide Otuer x
    console.log(x); // 20
}
console.log(x); // 10

const y = 100
{
    const y = 50
    console.log(y);
}
console.log(y);
/*
let and const are block scoped. When we create a variable with the same name inside a block, it hides the outer variable. So inside the block, inner value is printed, and outside the block, outer value is printed
*/