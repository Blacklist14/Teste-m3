/*COMPRA ITENS */
let number = 1
buttonCompra = document.querySelectorAll(".item-button")
buttonCompra.forEach((props,val)=>{
    props.addEventListener("click",()=>{
        const carrinho = document.querySelector("#card-not")
        carrinho.innerHTML = number++
    })
})