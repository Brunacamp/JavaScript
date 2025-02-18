//1
for(let numero = 1; numero <= 30; numero++ ) {
    console.log(numero)
}

console.log("----------------------")
//2
for(let numero1 = 30; numero1 >= 1; numero1--) {
    console.log(numero1)
}

console.log("----------------------")
//3
for(let cont = 1; cont <= 5; cont++ ) {
    numeros = prompt("Digite 5 numeros:")
    if (numeros >= 50){
    console.log("Numero acima da média")
    } else {
        console.log("Numero abaixo da média")
    }
}

console.log("----------------------")
//4
let num = prompt("Digite um numero:")
for (let mult = 1; mult <=10; mult++) {
    let resultado = mult * num
    console.log(mult, "x", num, "=", resultado)
}

console.log("----------------------")
//5
let numero = prompt("Escolha quantos patinhos vão passear:")
for (let algo = 1; algo <=1; algo++) {
    sub = numero - 1
    console.log(numero, "foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá Mas só", sub, "patinhos voltaram de lá. Que se repete até que nenhum patinho voltou de lá.Ao final, todos os patinhos voltam:A mamãe patinha foi procurarAlém das montanhasNa beira do marA mamãe gritou: Quá, quá, quá, quáE os patinhos voltaram de lá.")
}

console.log("----------------------")
//6
for(let cont1 = 1; cont1 <= 10; cont1++ ) {
    idade = prompt("Digite 10 idades:")
    if (idade >= 18){
    console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

console.log("----------------------")
//6
for(let cont2 = 1; cont2 <= 5; cont2++ ) {
    voto = prompt("Digite 5 votos:")
    if (voto == 5){
    console.log("Voto nulo")
    } else if (voto == 6) {
        console.log("voto em branco")
    } else {
        console.log("voto para os respectivos candidatos")
    }
}