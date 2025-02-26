//1
let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    botao.style.backgroundColor= "pink"
})
botao.addEventListener("dblclick", function(){
    botao.style.backgroundColor= "blue"
})

//2
let aumentar = document.getElementById("aumenta")
let paragrafo = document.getElementById("paragrafo")
let curtidas = 0

aumentar.addEventListener("click", function() {
    curtidas++
    paragrafo.innerText=curtidas
})

//3
let text = document.getElementById("text")
let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let text3 = document.getElementById("text3")
let text4 = document.getElementById("text4")
let mudarText = document.getElementById("mudarText")

mudarText.addEventListener("click", function(){
    text.innerText = "Eu gosto de JavaScript"
    text1.innerText = "Eu gosto de JavaScript"
    text2.innerText = "Eu gosto de JavaScript"
    text3.innerText = "Eu gosto de JavaScript"
    text4.innerText = "Eu gosto de JavaScript"
})

//4
let mensagem = document.getElementById("mensagem")
let enviar = document.getElementById("enviar")

enviar.addEventListener("click", function(){
    if (mensagem.lastChild) {
        mensagem.removeChild(mensagem.lastChild)
    }
    enviar.innerText = "Mensagem enviada"
})

//5
let doisText = document.getElementById("doisText")
let ajustar = document.getElementById("ajustar")

ajustar.addEventListener("click", function(){
    doisText.style.display = "flex"
})

//6
let vazia = document.getElementById("vazia")
vazia.style.backgroundColor = "purple"
vazia.style.width = "200px"
vazia.style.height = "200px"
let circulo = document.getElementById("circulo")
let quadrado = document.getElementById("quadrado")

circulo.addEventListener("click", function(){
    vazia.style.borderRadius = "360px"
})
quadrado.addEventListener("click", function(){
    vazia.style.borderRadius = "0px"
})

