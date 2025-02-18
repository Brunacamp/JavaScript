//1
let amigos = ["Como eu era antes de você", "Como treinar seu dragão", "enrolados"]
console.log(amigos[0])

console.log("---------------")
//2
let frutas = ["maça", "banana", "melancia", "pera", "abacaxi"]
console.log(frutas[2])

console.log("---------------")
//3
let cor = ["vermelho", "azul", "roxo"]
for(let i = 0; i < cor.length; i++) {
    console.log(cor[i])
    
}
cor.push("laranja")
console.log(cor)

console.log("---------------")
//4
let num = ["5", "4", "3", "2"]
for(let i = 0; i < num.length; i++) {
    console.log(num[i])
    
}
num.pop()
console.log(num)

console.log("---------------")
//5
let cidade = ["Suzano", "Ferraz"]
for(let i = 0; i < cidade.length; i++) {
    console.log(cidade[i])
}
cidade.unshift("Mogi")
console.log(cidade)

console.log("---------------")
//6
let animal = ["cachorro", "gato", "rato"]
for(let i = 0; i < animal.length; i++) {
    console.log(animal[i])
    
}
animal.shift()
console.log(animal)

console.log("---------------")
//7
let carro = ["civic", "fusca", "dodge ram", "camaro"]
for(let i = 0; i < carro.length; i++) {
    console.log(carro[i])
}
console.log(carro)

console.log("---------------")
//8
let vazio = []
console.log("adiciona no final")
vazio.push("3", "2", "1")
console.log(vazio)

console.log("adiciona no inicio")
vazio.unshift("4")
console.log(vazio)

console.log("remove o ultimo")
vazio.pop()
console.log(vazio)

console.log("remove o primeiro")
vazio.shift()
console.log(vazio)

console.log("array final")
for(let i = 0; i < vazio.length; i++) {
    console.log(vazio[i])
}
console.log(vazio)
