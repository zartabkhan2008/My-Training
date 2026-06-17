// Scope
// Global Scope

let global = "Momin zartab abubakar"
function idname() {
console.log(global);
}
console.log(global);

// Local Scope

function fullname() {
let name = "Momin Mudassir Abubakar"
console.log(name);
}
fullname()
// console.log(name);  ==> Error

// Block Scope
{
    let name = "Momin Ali"
    console.log(name);
}
// console.log(name); ==> Error