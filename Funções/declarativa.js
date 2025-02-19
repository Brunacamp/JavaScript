// SEM PARAMETRO
function mostrarMensagem() {
    console.log("olá")
}

mostrarMensagem()//para chamar a função

function contarAteTres() {
    for(let i = 1; i <= 3; i ++) {
        console.log(i)
    }
}
contarAteTres()

// COM PARAMETRO
function soma(a,b) {
    let resultado = a + b
    return resultado
}
console.log(soma(3,7))
console.log(soma(5,2))
console.log(soma(3,1))

function aoQuadrado(numero) {
    let quadrado = numero * numero
    return quadrado
}
console.log(aoQuadrado(5))
