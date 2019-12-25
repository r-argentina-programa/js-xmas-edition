const $azul = document.querySelector("#azul")
const $verde = document.querySelector("#verde")
const $rojo = document.querySelector("#rojo")
const $amarillo = document.querySelector("#amarillo")
const arrayColores = []
const $submit = document.querySelector("#submitColores")
const $chequearColores = document.querySelector("#chequearColores")
let $inputColores = document.querySelector("#inputColores")

function devolverColorAlAzar() {
    const numeroRandom = Math.random()
    if (numeroRandom >= 0 && numeroRandom < 0.25) {
        return "azul"
    } else if (numeroRandom >= 0.25 && numeroRandom < 0.50) {
        return "rojo"
    } else if (numeroRandom >= 0.50 && numeroRandom < 0.75) {
        return "verde"
    } else if (numeroRandom >= 0.75 && numeroRandom <= 1) {
        return "amarillo"
    }
}

function pushColorAlArray() {
    arrayColores.push(devolverColorAlAzar())
    console.log(arrayColores)
}

$submit.onclick = function imprimirColores() {
    pushColorAlArray()
    alert(arrayColores)
}

$chequearColores.onclick = function chequearColores() {
    for (let i = 0; arrayColores.length > i; i++) {
        if ($inputColores.value === arrayColores.join()) {

            console.log("Vas bien")
        } else {

            console.log("Perdiste!")
        }
    }
}