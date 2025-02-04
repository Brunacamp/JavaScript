// numero positivo, negativa ou zero
let numero = Number(prompt("Escolha um numero:"))

if (numero > 0) {
    console.log("Numero positivo!")
} else if (numero < 0) {
    console.log("Numero negativo!")
} else {
    console.log("zero")
}

console.log("---------------------------")

let nota = Number(prompt("Qual a nota?"))

if (nota >= 9) {
    console.log("exelente")
} else if ( nota >= 7) {
    console.log("bom")
} else if ( nota >= 5) {
    console.log("regular")
} else {
    console.log("ruim")
}