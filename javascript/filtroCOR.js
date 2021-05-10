let cor = 0
let cor1 = 0
let cor2 = 0
let cor3 = 0
let cor4 = 0
let cor5 = 0
let cor6 = 0
let cor7 = 0
let cor8 = 0

/* FILTRA POR COR*/
document.querySelector("#amarelo").addEventListener("click", () => {
    contentFilter()

    if(cor <= 0){
        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "amarelo") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor++
    if(cor >=2){
        displayItem()
        cor = 0
    }
})

document.querySelector("#branco").addEventListener("click", () => {
    contentFilter()

    if(cor1 <= 0){
        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "branco") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor1++
    if(cor1 >= 2){
        displayItem()
        cor1 = 0
    }
})

document.querySelector("#verde").addEventListener("click", () => {
    contentFilter()

    if(cor2 <= 0){

        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "verde") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor2++
    if(cor2 >=2){
        displayItem()
        cor2 = 0
    }
})

document.querySelector("#rosa").addEventListener("click", () => {
    contentFilter()

    if(cor3 <= 0){

        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "rosa") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor3++
    if(cor3 >= 2){
        displayItem()
        cor3 = 0
    }
})

document.querySelector("#laranja").addEventListener("click", () => {
    contentFilter()

    if(cor4 <= 0){

        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "laranja") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor4++
    if(cor4 >= 2){
        displayItem()
        cor4 = 0
    }
})

document.querySelector("#roxo").addEventListener("click", () => {
    contentFilter()

    if(cor5 <= 0){

        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "roxo") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor5++
    if(cor >= 2){
        displayItem()
        cor5 = 0
    }
})

document.querySelector("#cinza").addEventListener("click", () => {
    contentFilter()

    if(cor6 <= 0){

        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor === "cinza") {
                contentFilter()
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor6++
    if(cor6 >= 2){
        displayItem()
        cor6 =0
    }
})

document.querySelector("#azul").addEventListener("click", () => {
    contentFilter()

    if(cor7 <= 0){

        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "azul") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor7++
    if(cor7 >= 2){
        displayItem()
        cor7 = 0
    }
})

document.querySelector("#marrom").addEventListener("click", () => {
    contentFilter()

    if(cor8 <= 0){

        itemJSON.forEach((props, val) => {
            if (itemJSON[val].cor == "marrom") {
                itemContent[val].style.display = "flex"
            }
        })
    }
    cor8++
    if(cor8 >= 2){
        displayItem()
        cor8 = 0
    }
})