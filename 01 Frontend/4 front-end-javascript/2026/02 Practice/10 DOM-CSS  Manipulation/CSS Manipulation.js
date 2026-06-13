let box =
document.getElementById("box")
let btn =
document.getElementById("btn")

btn.addEventListener( "click",() => {
box.style.backgroundColor = "blue"
box.style.color = "white"
box.style.width = "150px"
box.style.height = "150px"
})


let box1 =
document.getElementById("box1")
let click =
document.getElementById("click")

click.addEventListener( "click", () => {
box1.classList.add("active")
})