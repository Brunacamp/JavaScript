//1
let numero = 1
while (numero <= 10) {
    console.log(numero)
    numero ++
}

console.log("----------------")
//2
let num = prompt("escolha um numero:")
let tabuada = 1
while (tabuada <= 10) {
    let resultado = num * tabuada
    console.log(num, "x", tabuada, "=", resultado)
    tabuada += 1
}

console.log("----------------")
//3
let contagem = 10
while (contagem >= 1) {
    console.log(contagem)
    contagem --
}

console.log("----------------")
//4
let senha = prompt("Digite a senha:")

while (senha != "12345") {
    senha = prompt("tente novamente")
    if (senha == "12345") {
        console.log("Senha correta!")
    } 
}

console.log("----------------")
//5
let num1 = 50
while (num1 <=100) {
    console.log(num1)
    num1 += 1
}

console.log("----------------")
//6
let num2 = 0
while (num2 <=100) {
    console.log(num2)
    num2 += 5
}

console.log("----------------")
//7
let algoritimo = "Eu gosto de JavaScript"
let num3 = 1
while (num3 <= 5) {
    console.log(algoritimo)
    num3 ++
}

console.log("----------------")
//8
let nome = prompt("escreva seu nome:")
let num4 = Number(prompt("quantas vezes o nome vai aparecer?"))
while (num4 >= 1) {
    console.log(nome)
    num4 --
}