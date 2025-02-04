//1 
let idade = prompt("qual sua idade?")
console.log("sua idade é ", idade)

if (idade >= 18) {
    console.log("Você é maior de idade!")
} else {
    console.log("Vc é menor de idade!")
}

//2
let numero = prompt("escolha um numero:")
let resultado = numero % 2 // resto
if (resultado == 0) {
    console.log("Par")
} else {
    console.log("Impar")
}

//3
let nota1 = prompt("qual a primeira nota:")
let nota2 = prompt("qual a segunda nota:")
let total = (nota1 + nota2) / 2

if (total >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

//4
let idade1 = prompt("qual sua idade?")
console.log("sua idade é ", idade1)

if (idade >= 18) {
    console.log("Entrada permitida")
} else {
    console.log("Entrada proibida")
}

//5
let senha = prompt("Qual a senha?")
if (senha == 1234) {
    console.log("Senha Correta.")
} else {
    console.log("Senha incorreta.")
}

//6
let temp = prompt("Qual a temperatura?")

if (temp >= 30) {
    console.log("Esta quente!")
} else {
    console.log("Esta frio!")
}

//7
let num = prompt("Escolha um numero:")

if (num < 0) {
    console.log("Numero negativo!")
} else {
    console.log("Numero positivo!")
}