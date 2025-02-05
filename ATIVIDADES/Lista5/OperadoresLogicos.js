//1
let idade = prompt("qual sua idade?")
let cartamotorista = true

if (idade >= 18 && cartamotorista == true) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

console.log("----------------------------")

//2
let anos = prompt("Quantos anos de trabalho voce tem?")
let projetos = prompt("Quantos projetos voce tem?")

if (anos >= 5 && projetos >= 10) {
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

console.log("----------------------------")

//3
let idade2 = prompt("qual sua idade?")

if (idade2 >= 18 && idade2 <= 30) {
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}

console.log("----------------------------")

//4
let idade3 = prompt("qual sua idade?")
let exper = true

if (idade3 >= 21 && exper == true) {
    console.log("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para a vaga")
}

console.log("----------------------------")

//5
let nome = prompt("qual o nome de usuario?")
let senha = prompt("qual a senha?")

if (nome == "admin" && senha == 1234) {
    console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}

console.log("----------------------------")

//6
let num = prompt("Escreva um numero")

if (num >= 10 && num <= 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (num >= 30 && num <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}

console.log("----------------------------")

//7
let num2 = prompt("Digite um numero")

if (num2 <= 10 || num2 >= 100) {
    console.log("O número é aceito")
} else if (num2 == 50) {
    console.log("O número é aceito")
} else {
    console.log("O número não é aceito")
}

console.log("----------------------------")