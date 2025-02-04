//1
let idade = Number(prompt("Qual sua idade?"))

if (idade <= 12) {
    console.log("Criança")
} else if ( idade <= 17) {
    console.log("Adolescente")
} else if ( idade <= 59) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

console.log("--------------------")

//2
let temp = Number(prompt("Qual a temperatura?"))

if (temp <= 10) {
    console.log("Muito frio")
} else if ( temp <= 20) {
    console.log("Frio")
} else if ( temp <= 30) {
    console.log("Agradavel")
} else {
    console.log("Muito quente")
}

console.log("--------------------")

//3
let turno = prompt("Qual seu turno de estudo?")

if (turno == "m") {
    console.log("Bom dia!")
} else if ( turno == "v") {
    console.log("Boa tarde!")
} else if ( turno == "n") {
    console.log("Boa noite!")
} else {
    console.log("turno invalido!")
}

console.log("--------------------")

//4
let compra = prompt("Qual o valor da compra?")

if (compra <= 100) {
    console.log("Desconto de 5%")
} else if ( compra <= 200) {
    console.log("Desconto de 10%")
} else{
    console.log("Desconto de 15%")
}

console.log("--------------------")

//5
let nota = prompt("Qual a nota?")

if (nota >= 90) {
    console.log("A")
} else if ( nota >= 80) {
    console.log("B")
} else if ( nota >= 70) {
    console.log("C")
} else if ( nota >= 60) {
    console.log("D") 
} else{
    console.log("F")
}

console.log("--------------------")

//6
let dia = prompt("Qual o dia da semana de 1 a 7?")

if (dia == 1) {
    console.log("domingo")
} else if ( dia == 2) {
    console.log("segunda")
} else if ( dia == 3) {
    console.log("terça")
} else if ( dia == 4) {
    console.log("quarta")
} else if ( dia == 5) {
    console.log("quinta")
} else if ( dia == 6) {
    console.log("sexta")
} else if ( dia == 7) {
    console.log("sabado")
}

console.log("--------------------")

//7
let dist = prompt("Qual o distancia em metros?")

if (dist <= 400) {
    console.log("pista curta")
} else if ( dist <= 800) {
    console.log("pista media")
} else if ( dist <= 1500) {
    console.log("pista longa")
} else {
    console.log("pista muito longa")
}

console.log("--------------------")

//8
let pont = prompt("Qual a pontuação?")

if (pont <= 1000) {
    console.log("iniciante")
} else if ( pont <= 5000) {
    console.log("intermedario")
} else if ( pont <= 10000) {
    console.log("avançado")
} else {
    console.log("mestre")
}