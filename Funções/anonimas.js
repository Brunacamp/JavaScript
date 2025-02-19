// FUNÇÃO ANONIMA
let saudacao = function(nome) {
    console.log("oi", nome)
}
saudacao("juliana")

// ARROW FUNCTION (SETA)
let cumprimento = (nome) => {
    console.log("oi", nome)
}
cumprimento("josé")

// FUNÇÃO ANONIMA
let soma = function(a,b){
    let resultado = a + b 
    return resultado
}
console.log(soma(5,3))

// ARROW FUNCTION
let adicao = (a,b) => {
    let resultado = a + b 
    return resultado
}
console.log(adicao(6,4))

// FUNÇÃO ANONIMA
let dobro = function(numero) {
    let resultado = numero * 2
    return resultado
}
console.log(dobro(5))

// ARROW FUNCTION
let vezes2 = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(vezes2(8))