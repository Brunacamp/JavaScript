let contador = 0 //inicia a contagem do zero

while (contador <= 5) {
    //continua enquanto a condição for verdade
    console.log(contador)
    contador++ //atualiza o  valor do contador
}

console.log("-------------------------------")

let numero = 3
let multiplicador = 1 
while (multiplicador <= 4) {
    let resultado = numero * multiplicador
    console.log(numero, "x", multiplicador, "=", resultado)
    multiplicador += 1 
}

console.log("-------------------------------")

let palavra = prompt("Digite a palavra")
while (palavra != "oi") {
    palavra = prompt("tente novamente")
    if (palavra == "oi") {
        console.log("acertou")
    }
}