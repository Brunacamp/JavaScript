let contador = 0
while (contador != 5) {
    console.log("While", contador)
    contador++
}

let contador1 = 0
do {
    console.log("Do while", contador1)
    contador1++
} while (contador1 != 5)

//exemplo 2
let numero = 5
do {
    console.log(numero)
    numero -= 2
} while (numero >= 0)

//exemplo 3
let idade = prompt ("Qual sua idade? ")
do{
    if (idade > 0){
        console.log("Idade valida")
    }
    else{
        console.log("Idade Invalida")
    }
    idade = prompt("Qual sua Idade?")
} while (idade >= 0)