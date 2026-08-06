// Callback Functions in JS ft. Event Listeners

// 1) What is Callback ? ==> A callback function is a function that is passed as an argument to another function and is called later inside that function.

function main(callback) {
    console.log("Main function");
    callback(); // yaha call ho raha hai
}

function sayHi() {
    console.log("Hi");
}

main(sayHi); 

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