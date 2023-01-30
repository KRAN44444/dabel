let p = document.querySelector("#input")
let input = document.querySelector("#name")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")

let array = []
let counter = 0
let line = ""
let interval 

function rules(){
   let name = "" 
   name = input.value
   line = "Привет, "+name+". Здесь будут правила игры"
  
   input.remove()
   btn.remove()
//    for(;counter<line.length;){
//     ar(line[counter])
//    }
 interval = setInterval(ar,50)
}
function ar(){
    array.push(line[counter])   
    p.innerHTML = array.join("")
    counter++
    if (counter>line.length){
        clearInterval(interval)
        btn2.classList.toggle("none")
        btn2.classList.toggle("block")
    }
}
