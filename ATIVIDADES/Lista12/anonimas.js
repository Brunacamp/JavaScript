//1
let saudacao = function() {
    let nome = prompt("Digite seu nome:")
    console.log("olá,", nome, "como vai?")
}
saudacao()

console.log("----------")
//2
let a = Number(prompt("Digite um numero:"))
let b = Number(prompt("Digite outro:"))
let soma = function(a,b) {
    let resultado = a + b 
    return resultado
}
console.log(soma(a,b))

console.log("----------")
//3
let base = Number(prompt("Digite a base:"))
let altura = Number(prompt("Digite altura:"))
let area = function(base,altura) {
    let resultado = base * altura
    return resultado
}
console.log(area(base,altura))

console.log("----------")
//4 
let numero = Number(prompt("Digite um numero:"))
let dobro = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(dobro(numero))

console.log("----------")
//5
let num = Number(prompt("Digite um numero:"))
let quadrado = (num) => {
    let resultado = num * num
    return resultado
}
console.log(quadrado(num))

console.log("----------")
//6
let idade = Number(prompt("Digite sua idade:"))
let verificarIdade = (idade) => {
    if (idade >= 18) {
        console.log("Maior de idade.")
    } else {
        console.log("Menor de idade.")
    }
}
console.log(verificarIdade(idade))

console.log("----------")
//7
let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))
let mediadaNotas = (num) => {
    let soma = nota1 + nota2 + nota3
    let resultado = soma / 3
    return resultado
}
console.log(mediadaNotas(num))