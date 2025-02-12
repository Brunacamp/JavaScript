//1 
let numero = 1
do {
    console.log(numero)
    numero++
} while (numero <= 20)

console.log("----------------------")
//2
let resposta1 = prompt ("Deseja continuar? Digite s para SIM e n para NÃO.")
do{
    if (resposta1 == "s"){
        console.log("Continue")
    } 
    else {
        console.log("Pare")
    }
    resposta1 = prompt("Deseja continuar? Digite s para SIM e n para NÃO.?")
} while (resposta1 == "s")


console.log("----------------------")
//3
let numero1 = 1
let sequencia = prompt ("Escolha o fim da sequencia:")
do {
    console.log(numero1)
    numero1 ++
} while (numero1 <= sequencia)


console.log("----------------------")
//4
let num = 1
do {
    console.log(num)
    num +=2
}while(num <= 31)

console.log("----------------------")
//5
let algoritimo = 1
do{
    let num1 = prompt ("Escolha 5 numeros:")
    if (num1 > 0){
        console.log("Positivo")
    } 
    else if (num1 < 0){
        console.log("Negativo")
    } else {
        console.log("O numero é 0")
    }
    algoritimo ++
} while (algoritimo <= 5)

console.log("----------------------")
//6
let resposta 
do{
    resposta = prompt ("Deseja continuar? Digite s para SIM e n para NÃO.")
    if (resposta == "s"){
        let num2 = Number(prompt("Digite 2 numeros para a soma:"))
        let num3 = Number(prompt("Digite 2 numeros para a soma:"))
        let soma = num2 + num3
        console.log(num2, "+", num3, "=", soma)
    } 
    else {
        console.log("Nao foi possivel.")
    }
} while (resposta == "s")