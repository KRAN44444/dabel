const cards = document.querySelectorAll(".card")
let first,second
let isFlipped = false
let lock = false
cards.forEach( card => {
let ran = Math.floor(Math.random()*12)
    card.style.order = ran
})


function reset(){
    first = null
    second = null
    isFlipped = false
    lock = false
}

function disableCards(){
    first.removeEventListener("click",flip)
    second.removeEventListener("click",flip)
    reset()
}

function unflip(){
    lock = true
    setTimeout(() => {
        first.classList.remove("flip")
        second.classList.remove("flip")
        reset()
    }, 1000)   
}

function flip(event){
    let item = event.target.parentElement
    console.log(event.target.parentElement)
    if (item.tagName == "DIV"){
        if (lock) return
        if (event.target.parentElement === first) return
        item.classList.add("flip")
        if (isFlipped == false){
            isFlipped = true;
            first = event.target.parentElement
            return
        }
        second = event.target.parentElement
        if (first.dataset.card === second.dataset.card){
            disableCards()
        }
        else{
            unflip()
        }
       
    }
   
}
cards.forEach(card=>card.addEventListener("click",flip))
