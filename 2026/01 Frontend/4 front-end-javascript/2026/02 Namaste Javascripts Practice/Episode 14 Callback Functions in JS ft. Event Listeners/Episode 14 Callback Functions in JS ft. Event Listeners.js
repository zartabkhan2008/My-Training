// Callback Functions in JS ft. Event Listeners

// 1) What is Callback ? ==> A callback function is a function that is passed as an argument to another function and is called later inside that function.

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

// 2) Event Listener
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("Success");
});


let likes = 0;

document.getElementById("likeBtn")
.addEventListener("click", function() {
    console.log("Likes:", ++likes);
});

// 3) SetTimeout

setTimeout(function () {
    console.log("Hi Momin Zartab Abubakar");
},3000);

setTimeout(function() {
    console.log("timer");
}, 5000);