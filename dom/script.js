let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
// document = HTML
// getElementByID = PEGUE O ELEMENTO PELO ID
// Logo guardamos o que estava no HTML em uma variavel no js

let texto = document.getElementById("texto")
texto.innerText = "Texto alternado"
//trocamos o texto
texto.style.color= "purple"
// unsando o style mexemos no CSS

let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    alert("botão clicado")
})

let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function(){
    alert("botão clicado duaz vezes")
    duplo.style.backgroundColor= "purple"
    duplo.style.color= "white"
})

let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function(){
    passe.innerText = "O mouse esta aqui"
    passe.style.backgroundColor= "purple"
    passe.style.color= "white"
})
passe.addEventListener("mouseout", function(){
    passe.innerText = "Passe o mouse aqui"
    passe.style.color= "black"
    passe.style.backgroundColor = "pink"
    passe.style.fontSize= "16px"
})