//Jogo pedra, papel e tesoura
// para armazenar as variaveis 
let placarJogador = 0
let placarPC = 0

// para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

for(let i = 0; i< rodadas; i++){
    const escolhajogador = prompt("Escoha pedra, papel ou tesoura: ")
    //Solicita que o usuario escolha qual ele quer

    const escolhapc = ["pedra", "papel", "tesoura"]
    [Math.floor(Math.random() *3)]
    //Gera uma escolha aleatoria para o computador
    //Criamos um array(vetor) com as opções e usamos o random para escolher de forma aleatoria

    alert(`Você escolheu ${escolhajogador}`)
    alert(`O computador escolheu ${escolhapc}`)
    //Mostra qual foi a nossa e escolha e a do computador 

    //Compara se a escola foi igual
    if (escolhajogador == escolhapc) {
        alert("Empate")
    } else if (escolhajogador == "pedra" && escolhapc == "tesoura") { // criamos a primeira verificação
        alert("Você venceu")
        placarJogador++
    } else if (escolhajogador == "tesoura" && escolhapc == "papel") { // criamos a segunda verificação
        alert("Você venceu")
        placarJogador++
    } else if (escolhajogador == "papel" && escolhapc == "pedra") { // criamos a terceira verificação
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
        placarPC++
    }
    console.log("Placar jogador: ", placarJogador)
    console.log("Placar computador: ", placarPC)
}
alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x ${placarPC} Computador`)