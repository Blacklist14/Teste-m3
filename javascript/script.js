let v1 = 0
document.querySelector("#ver-cores").addEventListener("click", () => {
    let roxo = document.querySelectorAll(".roxo")
    let rosa = document.querySelectorAll(".rosa")
    let verde = document.querySelectorAll(".verde")
    let vermelho = document.querySelectorAll(".vermelho")
    if (v1 <= 0) {
        roxo.forEach((props) => {
            props.style.display = "inline"
        })
        rosa.forEach((props) => {
            props.style.display = "inline"
        })
        verde.forEach((props) => {
            props.style.display = "inline"
        })
        vermelho.forEach((props) => {
            props.style.display = "inline"
        })

    }
    v1++
    if (v1 >= 2) {
        roxo.forEach((props) => {
            props.style.display = "none"
        })
        rosa.forEach((props) => {
            props.style.display = "none"
        })
        verde.forEach((props) => {
            props.style.display = "none"
        })
        vermelho.forEach((props) => {
            props.style.display = "none"
        })
        v1 = 0
    }
})

let itemJSON = [{
        "imagem": "https://i.pinimg.com/564x/74/f9/93/74f993732316a6e6569b3da688beb318.jpg",
        "nome": "cropped stripes",
        "valor": "120,00"
    },
    {
        "imagem": "https://i.pinimg.com/236x/01/50/97/0150972e7db2140a0bb7567de7ef22a7.jpg",
        "nome": "casaco pelos",
        "valor": "398,00"
    },
    {
        "imagem": "https://i.pinimg.com/originals/81/f1/38/81f138d71a8778bded487b0c56cf4e9f.png",
        "nome": "pochete clutch",
        "valor": "99,00"
    },
    {
        "imagem": "https://i.pinimg.com/236x/c6/75/ab/c675ab85bd8f0fa9c63f7955d8983385.jpg",
        "nome": "camisa transparente",
        "valor": "398,00"
    },
    {
        "imagem": "https://i.pinimg.com/236x/86/61/62/866162e3e93a9247acf5b169b46c0539.jpg",
        "nome": "body leopardo",
        "valor": "129,90"
    },
    {
        "imagem": "https://i.pinimg.com/236x/ca/11/ea/ca11ea4d650fa6ebe99988a97f772878.jpg",
        "nome": "cardigan off white",
        "valor": "99,90"
    },
    {
        "imagem": "https://i.pinimg.com/236x/9e/24/1e/9e241e9c038777f7d00329bdd5e06bfa.jpg",
        "nome": "saia em couro",
        "valor": "398,00"
    },
    {
        "imagem": "https://i.pinimg.com/236x/be/91/90/be9190624b61a130eaf982749257e210.jpg",
        "nome": "cardigan tigre",
        "valor": "398,00"
    }
]

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
    props.innerHTML = "R$ " + itemJSON[val].valor
})