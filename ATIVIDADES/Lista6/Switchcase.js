//1
let dia = Number(prompt("Qual o dia da semana de 1 a 7?"))

switch(dia) {
    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("segunda")
        break
    case 3:
        console.log("terça")
        break
    case 4:
        console.log("quarta")
        break
    case 5:
        console.log("quinta")
        break
    case 6:
        console.log("sexta")
        break
    case 7:
        console.log("sábado")
        break
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7.")
}

console.log("-----------------------")

//2
let idade = Number(prompt("Qual sua idade?"))

switch(idade) {
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}

console.log("-----------------------")

//3
let turno = String(prompt("Qual seu turno? m, m ou v?"))

switch(turno) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Bom tarde!")
        break
    case "n":
        console.log("Bom noite!")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}

console.log("-----------------------")

//4
let num = Number(prompt("Digite um numero de 1 a 5: "))

switch(num) {
    case 1:
        console.log("boa sorte")
        break
    case 2:
        console.log("boa noite")
        break
    case 3:
        console.log("bom dia")
        break
    case 4:
        console.log("boa tarde")
        break
    case 5:
        console.log("boa semana")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}

console.log("-----------------------")

//5
let estacao = Number(prompt("Digite um numero de 1 a 4: "))

switch(estacao) {
    case 1:
        console.log("primavera")
        break
    case 2:
        console.log("verão")
        break
    case 3:
        console.log("outono")
        break
    case 4:
        console.log("inverno")
        break
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}