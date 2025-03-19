// funções matematicas
let num = 4.7

//arredondar
console.log(Math.round(num)) //inteiro mais próximo
console.log(Math.floor(num)) //arredonda para baixo
console.log(Math.ceil(num)) //arredonda para cima

//numero aleatorio
console.log(Math.random()) //aleatorio entre 0 e 1
console.log(Math.random()*10) //aleatorio entre 0 e 10

//funções de string
let texto = "  Eu amo Javascript"
//manipular string
console.log(texto.toUpperCase()) // deixa tudo maiusculo
console.log(texto.toLowerCase()) // deixa tudo minusculo
console.log(texto.trim()) // remove os espaços antes e depois do texto
//localizar texto
console.log(texto.charAt(5)) // mostra a letra na posição
//trocar texto
console.log(texto.replace("amo", "adoro"))

//funções numericas
let numero = "42.85"
console.log(parseInt(numero)) // coverte para numero inteiro
console.log(parseFloat(numero)) // converte para decimal
console.log(Number(numero).toFixed(1)) // define quantas casas decimais vai mostrar