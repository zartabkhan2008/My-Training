let box =
document.getElementById("box")

let box1 =
document.getElementById("box1")

let x = 0
let y = 0

document.addEventListener( "keydown", (e) => {

   if (e.key === "ArrowRight" && x < 1030){
    x = x + 20}

    if (e.key === "ArrowLeft" && x > 0) {
    x = x - 25 }

    if (e.key === "ArrowDown" && y < 200) {
    y = y + 25  }

    if(e.key === "ArrowUp" && y > 0) {
    y = y - 10
    }

    box1.style.left = x + "px"
    box1.style.top = y + "px"
})

