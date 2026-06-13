// 1) function and function Call
//function add (a,b) { // a,b => This is Parameters (name)
  //  return a + b 
//} 
//console.log(add(2,3)) // 2,3 => This is Arguments (value)

// Call Back and map,Higher-Order Function

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let list = document.getElementById("list")

//
btn.addEventListener( "click",() =>{
let task = input.value    
let li = document.createElement("li")
li.textContent=task
//
let delBtn = document.createElement("button")
delBtn.textContent = "Delete"
delBtn.addEventListener("click", () => {
li.remove()
})
//
li.appendChild(delBtn)
list.appendChild(li)
input.value= ""
})
// Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});