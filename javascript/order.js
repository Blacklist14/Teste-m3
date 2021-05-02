let bo = 0
document.querySelector("#option-order").addEventListener("click",()=>{
    let list = document.querySelector("#list-order")
    if(bo <= 0){
        list.style.display = "flex"
    }
    bo++
    if(bo >= 2){
        list.style.display = "none"
        bo = 0
    }
})
