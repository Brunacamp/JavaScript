//1
let paragrafo = document.getElementById("paragrafo")

let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    paragrafo.style.color= "purple"
})

//2
let mudaCor = document.getElementById("mudaCor")
mudaCor.addEventListener("click", function(){
    mudaCor.style.backgroundColor= "pink"
})

//3
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function(){
    duplo.style.fontSize= "20px"
})

//4
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function(){
    passe.innerText = "O mouse esta aqui"
    passe.style.backgroundColor= "blue"
    passe.style.color= "white"
})
passe.addEventListener("mouseout", function(){
    passe.innerText = "Passe o mouse"
    passe.style.color= "black"
    passe.style.backgroundColor = "white"
})

//5
let imagem = document.getElementById("imagem")

let mudarImg = document.getElementById("mudarImg")
mudarImg.addEventListener("click", function(){
    imagem.style.width= "200px"
    imagem.style.height= "200px"
})

//6
let imagem2 = document.getElementById("imagem2")

let arredondar = document.getElementById("arredondar")
arredondar.addEventListener("click", function(){
    imagem2.style.width= "200px"
    imagem2.style.height= "200px"
    imagem2.style.borderRadius= "100px"
})

//7
let p1 = document.getElementById("p1")
let botao1 = document.getElementById("botao1")
botao1.addEventListener("click", function(){
    p1.style.backgroundColor= "purple"
    p1.style.color= "white"
})

let p2 = document.getElementById("p2")
let botao2 = document.getElementById("botao2")
botao2.addEventListener("click", function(){
    p2.style.backgroundColor= "pink"
    p2.style.color= "white"
    p2.style.fontSize= "20px"
})

let p3 = document.getElementById("p3")
let botao3 = document.getElementById("botao3")
botao3.addEventListener("click", function(){
    p3.style.backgroundColor= "blue"
    p3.style.color= "white"
    p3.style.fontSize= "24px"
    p3.style.borderRadius= "100px"
})