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
    "tamanho":"36"
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
},
{
    "imagem": "https://i.pinimg.com/236x/be/91/90/be9190624b61a130eaf982749257e210.jpg",
    "nome": "cardigan tigre",
    "valor": "275.00",
    "valorString":"275,00",
    "cor":"laranja",
    "tamanho":"40"
},
{
    "imagem": "https://i.pinimg.com/236x/9e/24/1e/9e241e9c038777f7d00329bdd5e06bfa.jpg",
    "nome": "saia em couro",
    "valor": "43.00",
    "valorString":"43,00",
    "cor":"marrom",
    "tamanho":"g"
}
]
/*COLOCA OS JSON NA TELA*/
const itemContent = document.querySelectorAll(".item-content")
const caixa = document.querySelector("#produtos-main")

const render = ()=>{
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
    
}
render()
const displayItem = () =>{
        itemContent.forEach((props, val) => {
            if(props.style.display == "none"){
                props.style.display = "flex"
            }
        })
}
const contentFilter = () => {
    const itemContent = document.querySelectorAll(".item-content")
    itemContent.forEach((props, val) => {
        props.style.display = "none"
    })
}