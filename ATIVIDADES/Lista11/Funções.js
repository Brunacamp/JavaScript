//1
function Mensagem () {
    console.log("Eu gosto de JavaScript")
}
Mensagem()

console.log("----------")
//2
function contarCinco() {
    for(let i = 1; i <= 5; i ++) {
        console.log(i)
    }
}
contarCinco()

console.log("----------")
//3
function saudação () {
    let nome = prompt("Digite seu nome:")
    console.log("Olá", nome)
}
saudação()

console.log("----------")
//4
function multiplicarDoisNumeros (a,b) {
    let resultado = a * b
    return resultado
}
console.log(multiplicarDoisNumeros(5,3))

console.log("----------")
//5
function verificarIdade () {
    let idade = prompt("Qual sua idade?")
    if (idade >= 18) {
        console.log("Maior de idade.")
    } else {
        console.log("Menor de idade.")
    }
}
verificarIdade()

console.log("----------")
//6
function somar(a,b) {
    let resultado1 = a + b
    return resultado1
}
console.log(somar(3,7))

console.log("----------")
//7
function calcularAreaRetangulo (altura, largura) {
    let area = altura * largura
    return area
}
console.log(calcularAreaRetangulo(5,5))

console.log("----------")
//8
function compararIdade () {
    let idade1 = prompt("Escreva a primeira idade:")
    let idade2 = prompt("Escreva a segunda idade:")
    if (idade1 > idade2) {
        console.log("Idade um é maior.")
    } else {
        console.log("Idade um é menor.")
    }
}
compararIdade()