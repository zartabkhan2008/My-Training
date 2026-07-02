// Arrow Function and Normal Function
/* 🔥 Arrow function rule:   
👉 Arrow function does not make its own this
👉 It uses this from its parent (outside) */

/* 🔥 Normal function rule:
👉 Normal function creates its own `this`
👉 Its `this` depends on how the function is called

*/

// Normal function
let user = {
    name : "Momin Zartab Abubakar",
    say : function () {
        console.log(this.name);
    }
}
user.say()

/*
let user = {
    name: "Zartab",

    say: function() {
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    }
};

user.say(); //  undefined */

// Arrow function
let idname = {
    name: "Zartab",

    say: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

idname.say();  

/*
let user = {
    name: "Zartab",

    say: () => {
        console.log(this.name);
    }
};

user.say(); => undefined 
*/