// Verificar se a pessoa pode votar 
let idade = 16
let titulo = true

if (idade >= 18 && titulo == true) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}

console.log("----------------------------")

// Verificar se o numero esta dentro do intervalo
// no &&(E) TUDO TEM Q SER VERDADE
let numero = 15

if (numero >= 10 && numero <= 20) {
    console.log("O numero esta entre 10 e 20")
} else {
    console.log("O numero esta fora do intervalo")
}

console.log("----------------------------")

// Compra desconto
// No ||(OU) APENAS UM PRECISA SER VERDADE
let valor = 150
let vip = false

if (valor>= 100 || vip == true) {
    console.log("Voce ganhou frete gratis")
} else {
    console.log("Tem que pagar o frete")
}

console.log("----------------------------")

// Numero no intervalo
let num = 1

if (num >= 5 || num <= 20) {
    console.log("Funcionou")
} else {
    console.log("Nao funcionou")
}