// JAVASCRIPT
let texto = document.getElementById("texto")
function mudarTexto(){
    texto.innerText = "Texto Alterado"
}
function mudarCor(){
    texto.style.color = "white"
    document.body.style.backgroundColor = "purple"
}

function trocarFundo(){
    let campo = document.getElementById("campo")
    campo.style.backgroundColor = "gray"
}

let imagem = document.getElementById("imagem")
function troca(){
    imagem.src = "imgcampo.jpg"
}
function destroca(){
    imagem.src = "img.jpg"
}

let mensagem = document.getElementById("mensagem")
function outroTexto(){
    mensagem.innerText = "Texto alterado"
}
function voltarTexto(){
    mensagem.innerText = "Passe o mouse aqui"
}

function aparece(){
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function aleatorio(){
    let tamanho = document.getElementById("tamanho")
    let novoTamanho = Math.floor(Math.random()*(40 - 10 + 1)) + 10
    tamanho.style.fontSize = novoTamanho + "px"
}