/* function a(){
    var x = 10 // local scope
    function b(){
    console.log(x) // lexical scope
    }
    b()
}
a()

var global = 20 // global scope
console.log(global) */

function a(){
    function b(){
    var x = 10
    }
    console.log(x)
    b()
}
a()
