/* FILTRAÇÃO POR VALOR */
let filter1 = 0
let filter2 = 0
let filter3 = 0
let filter4 = 0
let filter5 = 0

document.querySelector("#faixa-50").addEventListener("click", () => {
    contentFilter()
    const itemContent = document.querySelectorAll(".item-content")
    if (filter1 <= 0) {
        itemContent.forEach((parametro, valor) => {
            itemJSON.forEach((props,val)=>{
                if(itemJSON[valor].valor > 0){
                    if(itemJSON[valor].valor < 50){
                        parametro.style.display = "flex"
                    }
                }
            })  
        })
    }
    filter1++
    if (filter1 >= 2) {
        itemContent.forEach((parametro,val)=>{
            parametro.style.display = "flex"
        })
        filter1 = 0
    }

})
document.querySelector("#faixa-150").addEventListener("click", () => {
    contentFilter()
    const itemContent = document.querySelectorAll(".item-content")
    if (filter2 <= 0) {
        itemContent.forEach((parametro, valor) => {
            itemJSON.forEach((props,val)=>{
                if(itemJSON[valor].valor > 51){
                    if(itemJSON[valor].valor < 150){
                        parametro.style.display = "flex"
                    }
                }
            })  
        })
    }
    filter2++
    if (filter2 >= 2) {
        itemContent.forEach((parametro,val)=>{
            parametro.style.display = "flex"
        })
        filter2 = 0
    }
})
document.querySelector("#faixa-300").addEventListener("click",()=>{
    contentFilter()
    const itemContent = document.querySelectorAll(".item-content")
    if(filter3 <= 0){  
    itemContent.forEach((parametro, valor) => {
        itemJSON.forEach((props,val)=>{
            if(itemJSON[valor].valor > 151){
                if(itemJSON[valor].valor < 300){
                    parametro.style.display = "flex"
                }
            }
        })  
    })
    }
    filter3++
    if(filter3 >=2){
        itemContent.forEach((parametro,val)=>{
            parametro.style.display = "flex"
        })
        filter3 = 0
    }
})
document.querySelector("#faixa-500").addEventListener("click", () => {
    contentFilter()
    const itemContent = document.querySelectorAll(".item-content")
    if (filter4 <= 0) {
        itemContent.forEach((parametro, valor) => {
            itemJSON.forEach((props,val)=>{
                if(itemJSON[valor].valor > 301){
                    if(itemJSON[valor].valor < 500){
                        parametro.style.display = "flex"
                    }
                }
            })  
        })
    }
    filter4++
    if (filter4 >= 2) {
        itemContent.forEach((parametro,val)=>{
            parametro.style.display = "flex"
        })
        filter4 = 0
    }
})
document.querySelector("#faixa-aparti-1").addEventListener("click", () => {
    contentFilter()
    const itemContent = document.querySelectorAll(".item-content")
    if (filter5 <= 0) {
        itemContent.forEach((parametro, valor) => {
            itemJSON.forEach((props,val)=>{
                if(itemJSON[valor].valor > 1 ){
                    parametro.style.display = "flex"
                }
                
            })  
        })
    }
    filter5++
    if (filter5 >= 2) {
        itemContent.forEach((parametro,val)=>{
            parametro.style.display = "flex"
        })
        filter5 = 0
    }
})