let amigos = ["carlos", "joana", "marcos", "barbara", "luana"]
console.log(amigos[4])

for(let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}

console.log("adicionando ao fim da lista")
amigos.push("fernanda")
console.log(amigos)

console.log("remove o primeiro")
amigos.shift()
console.log(amigos)

console.log("remove o ultimo")
amigos.pop()
console.log(amigos)

console.log("adiciona no inicio")
amigos.unshift("tati")
console.log(amigos)