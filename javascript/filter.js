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