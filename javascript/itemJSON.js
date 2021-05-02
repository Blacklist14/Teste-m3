//1: O JSON DOS ITENS
//2:FILTRA OS ITENS DO JSON POR VALOR
//3: FILTRA OS ITENS DO JSON POR COR


/* Json-itens-lojas */
let itemJSON = [{
    "imagem": "https://i.pinimg.com/564x/74/f9/93/74f993732316a6e6569b3da688beb318.jpg",
    "nome": "cropped stripes",
    "valor": "120.00",
    "valorString":"120,00",
    "cor":"verde",
    "tamanho":"p"
},
{
    "imagem": "https://i.pinimg.com/236x/01/50/97/0150972e7db2140a0bb7567de7ef22a7.jpg",
    "nome": "casaco pelos",
    "valor": "168.50",
    "valorString":"168.50",
    "cor":"rosa",
    "tamanho":36
},
{
    "imagem": "https://i.pinimg.com/originals/81/f1/38/81f138d71a8778bded487b0c56cf4e9f.png",
    "nome": "pochete clutch",
    "valor": "99.00",
    "valorString":"99,00",
    "cor":"preto",
    "tamanho":"38"
},
{
    "imagem": "https://i.pinimg.com/236x/c6/75/ab/c675ab85bd8f0fa9c63f7955d8983385.jpg",
    "nome": "camisa transparente",
    "valor": "398.00",
    "valorString":"398,00",
    "cor":"preto",
    "tamanho":"42"
},
{
    "imagem": "https://i.pinimg.com/236x/86/61/62/866162e3e93a9247acf5b169b46c0539.jpg",
    "nome": "body leopardo",
    "valor": "129.90",
    "valorString":"129,90",
    "cor":"amarelo",
    "tamanho":"44"
},
{
    "imagem": "https://i.pinimg.com/236x/ca/11/ea/ca11ea4d650fa6ebe99988a97f772878.jpg",
    "nome": "cardigan off white",
    "valor": "99.90",
    "valorString":"99,90",
    "cor":"branco",
    "tamanho":"m"
},
{
    "imagem": "https://i.pinimg.com/236x/9e/24/1e/9e241e9c038777f7d00329bdd5e06bfa.jpg",
    "nome": "saia em couro",
    "valor": "43.00",
    "valorString":"43,00",
    "cor":"marrom",
    "tamanho":"g"
},
{
    "imagem": "https://i.pinimg.com/236x/be/91/90/be9190624b61a130eaf982749257e210.jpg",
    "nome": "cardigan tigre",
    "valor": "275.00",
    "valorString":"275,00",
    "cor":"laranja",
    "tamanho":"40"
}
]

/*COLOCA OS JSON NA TELA*/
let itemImg = document.querySelectorAll(".item-img")
    itemImg.forEach((props, val) => {
        props.setAttribute("src", `${itemJSON[val].imagem}`)
})

let itemName = document.querySelectorAll(".item-name")
    itemName.forEach((props, val) => {
        props.innerHTML = itemJSON[val].nome.toUpperCase()
})

let itemValue = document.querySelectorAll(".item-value")
    itemValue.forEach((props, val) => {
        props.innerHTML = "R$ " + itemJSON[val].valorString
})

/* FILTRAÇÃO POR VALOR */
let filter1 = 0
let filter2 = 0
let filter3 = 0
let filter4 = 0
let filter5 = 0

let itemContent = document.querySelectorAll(".item-content")
let displayItem = ()=> itemContent.forEach((props,val)=>{
    props.style.display = "flex"
})
let contentFilter = ()=>{itemContent.forEach((props,val)=>{
    props.style.display = "none"
})}

document.querySelector("#faixa-50").addEventListener("click",()=>{
    contentFilter() 
    if(filter1 <= 0){
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].valor > 0){
            if(itemJSON[val].valor < 50){
                contentFilter
                itemContent[val].style.display = "flex"
            }
        }
    })
    }
    filter1++
    if(filter1 >=2){
        displayItem()
        filter1 = 0
    }

})

document.querySelector("#faixa-150").addEventListener("click",()=>{
    contentFilter() 
    if(filter2 <= 0){
        itemJSON.forEach((props,val)=>{
            if(itemJSON[val].valor > 51){
                if(itemJSON[val].valor < 150){
                    itemContent[val].style.display = "flex"
                }
            }
        })
    }
    filter2++
    if(filter2 >= 2){
        displayItem()
        filter2 = 0
    }
})

document.querySelector("#faixa-300").addEventListener("click",()=>{
    contentFilter()
    if(filter3 <= 0){   
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].valor > 151){
            if(itemJSON[val].valor < 300){
                contentFilter
                itemContent[val].style.display = "flex"
            }
        }
    })  
    }
    filter3++
    if(filter3 >=2){
        displayItem()
        filter3 = 0
    }
})

document.querySelector("#faixa-500").addEventListener("click",()=>{
    contentFilter()
    if(filter4 <= 0){
        itemJSON.forEach((props,val)=>{
            if(itemJSON[val].valor > 301){
                if(itemJSON[val].valor < 500){
                    contentFilter()
                    itemContent[val].style.display = "flex"
                }
            }
        })
    }
    filter4++
    if(filter4 >= 2){
        displayItem()
        filter4 = 0
    }
})

document.querySelector("#faixa-aparti-1").addEventListener("click",()=>{
    contentFilter()
    if(filter5 <= 0){
        itemJSON.forEach((props,val)=>{
            if(itemJSON[val].valor > 1){
                itemContent[val].style.display = "flex"
            }
        })
    }
    filter5++
    if(filter5 >= 2){
        displayItem()
        filter5 = 0
    }
})

/* FILTRA POR COR*/
document.querySelector("#amarelo").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "amarelo"){
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#branco").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "branco"){
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#verde").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "verde"){
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#rosa").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "rosa"){
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#laranja").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "laranja"){
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#roxo").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "roxo"){
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#cinza").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor === "cinza"){
            contentFilter()
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#azul").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "azul"){
            itemContent[val].style.display= "flex"
        }
    })
})
document.querySelector("#marrom").addEventListener("click",()=>{
    contentFilter()
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].cor == "marrom"){
            itemContent[val].style.display= "flex"
        }
    })
})

/*FILTRA POR TAMANHO */
document.querySelector("#tamanho-p").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "p"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-m").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "m"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-g").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "g"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-gg").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "gg"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-u").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "u"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-36").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "36"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-38").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "38"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-40").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "40"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-42").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "42"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-44").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "44"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})
document.querySelector("#tamanho-46").addEventListener("click",()=>{
    itemJSON.forEach((props,val)=>{
        if(itemJSON[val].tamanho == "46"){
            contentFilter()
            itemContent[val].style.display = "flex"
        }
    })
})