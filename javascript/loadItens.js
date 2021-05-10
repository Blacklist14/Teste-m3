/*MOSTRA MAIS PRODUTOS */

let refil = 0
document.querySelector("#item-carregar").addEventListener("click", () => {
    if(refil < 2){
        const caixinha = `<div class="item-content">
        <img class="item-img" alt="">
        <p class="item-name">teste</p>
        <span class="item-value"></span>
        <p class="item-div">até 3x de R$40,00</p>
        <button class="item-button">COMPRAR</button>
        </div>`
        caixa.innerHTML += caixinha
        render()
        refil++
    }
})