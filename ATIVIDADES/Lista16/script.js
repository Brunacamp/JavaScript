//1  
function mostrarNum(){
    let numero = document.getElementById("numero").value
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let num3 = document.getElementById("num3")
    console.log(Math.round(numero)) 
    console.log(Math.floor(numero)) 
    console.log(Math.ceil(numero))
    num1.innerText = "arredondamento: " + Math.round(numero)
    num2.innerText = "teto: " + Math.floor(numero)
    num3.innerText = "piso: " + Math.ceil(numero)
}

//2
function mostrartext(){
    let texto = document.getElementById("texto").value
    let texto1 = document.getElementById("texto1")
    let texto2 = document.getElementById("texto2")
    console.log(texto.toUpperCase()) 
    console.log(texto.toLowerCase()) 
    texto1.innerText = "Maiusculo: " + texto.toUpperCase()
    texto2.innerText = "Minusculo: " + texto.toLowerCase()
}

//3
function mostrarinteiro(){
    let inteiro = document.getElementById("inteiro")
    console.log(Math.random(1)*100)
    inteiro.innerText = (Math.random(1)*100)
}

//4
function mostrarDecimal(){
    let decimal = document.getElementById("decimal").value
    let decimal1 = document.getElementById("decimal1")
    console.log(Number(decimal).toFixed(2))
    decimal1.innerText = (Number(decimal).toFixed(2))
}

//5
function mostrarFrase(){
    let frase = document.getElementById("frase").value
    let qualsubstituir = document.getElementById("qualsubstituir").value
    let substituir = document.getElementById("substituir").value
    let frase1 = document.getElementById("frase1")

    console.log(frase.replace(qualsubstituir, substituir))
    frase1.innerText = (frase.replace(qualsubstituir, substituir))
}

//6
function mostrarValor(){
    let valor = document.getElementById("valor").value
    let valor1 = document.getElementById("valor1")
    console.log(isNaN(valor))
    valor1.innerText = (isNaN(valor))
}

//7 
function mostrarLetra(){
    let palavra2 = document.getElementById("palavra2").value
    let posição = document.getElementById("posição").value
    let frase1 = document.getElementById("frase1")

    console.log(palavra2.charAt(posição))
    letra.innerText = (palavra2.charAt(posição))
}

//8
function mostrarNome(){
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let nomeCompleto = document.getElementById("nomeCompleto")
    nomeCompleto.innerText = nome + (" ") + sobrenome
}

//9
function mostrarSoma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let somar1 = document.getElementById("somar1")
    let soma = (numero1 + numero2)
    somar1.innerText = numero1 + "+" + numero2 + " = " + soma
}

//10
function mostrarIdade(){
    let idade1 = document.getElementById("idade1").value
    let verificar = document.getElementById("verificar")
    if(idade1 >= 18){
        verificar.innerText = "Pode Dirigir"
    } else {
        verificar.innerText = "Não pode dirigir"
    }
}