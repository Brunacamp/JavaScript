//1
function aparece(){
    let img = document.getElementById("img")
    if (img.style.display == "none") {
        img.style.display = "block"
    } else {
        img.style.display = "none"
    }
}

//2
let escuro = document.getElementById("escuro")
function trocarTema(){
    escuro.style.color = "white"
    document.body.style.backgroundColor = "black"
}

//3
let texto = document.getElementById("texto")
function completar(){
    texto.innerText = "Meu nome é Bruna, tenho 17 anos, moro em Suzano, estudo no Senai e faço o curso de Desenvolvimento de Sistemas."
}

//4
let text = document.getElementById("text")
function mudarCor(){
    if (text.style.color == "green") {
        text.style.color = "yellow"
    } else if (text.style.color == "yellow"){
        text.style.color = "blue"
    } else if (text.style.color == "blue"){
        text.style.color = "green"
    } else {
        text.style.color = "green"
    }
}

//5
function botao(){
    alert("Pare de clicar no botão!")
}

//6
let texto1 = document.getElementById("texto1")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
img1.style.display = "none"
img2.style.display = "none"
img3.style.display = "none"

function porta1(){
    img1.style.display = "block"
    alert("Você ganhou um carro!")
}
function porta2(){
    img2.style.display = "block"
    alert("Você não ganhou nada!")
}
function porta3(){
    img3.style.display = "block"
    alert("Parabéns, você encontrou o tesouro!")
}

//7
function redimensionar(){
    let imagem5 = document.getElementById("imagem5")
    let novoTamanho = Math.floor(Math.random()*(30 - 20 + 1)) + 10
    imagem5.style.width = novoTamanho + "px"
    imagem5.style.height = novoTamanho + "px"
}

//8
let caixa1 = document.getElementById("caixa1")
let caixa2 = document.getElementById("caixa2")
let caixa3 = document.getElementById("caixa3")

caixa1.style.backgroundColor = "red"

function mudarDivs(){
    if (caixa1.style.backgroundColor == "red") {
        caixa1.style.backgroundColor = "black"
        caixa2.style.backgroundColor = "yellow"
        caixa3.style.backgroundColor = "black"
        alert("ATENÇÃO")
    } else if (caixa2.style.backgroundColor == "yellow"){
        caixa1.style.backgroundColor = "black"
        caixa2.style.backgroundColor = "black"
        caixa3.style.backgroundColor = "green"
        alert("PODE IR")
    } else if (caixa3.style.backgroundColor == "green"){
        caixa1.style.backgroundColor = "red"
        caixa2.style.backgroundColor = "black"
        caixa3.style.backgroundColor = "black"
        alert("PARE")
    }
}

//9
let imgcomedia = document.getElementById("imgcomedia")
let imgromance = document.getElementById("imgromance")
let imgacao = document.getElementById("imgacao")

function troca1(){
    imgcomedia.src = "filmes/comedia.webp"
}
function destroca1(){
    imgcomedia.src = "filmes/1.png"
}

function troca2(){
    imgromance.src = "filmes/romance.webp"
}
function destroca2(){
    imgromance.src = "filmes/2.png"
}

function troca3(){
    imgacao.src = "filmes/acao.jpg"
}
function destroca3(){
    imgacao.src = "filmes/3.png"
}
