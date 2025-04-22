// QUANDO CHEGAR A PAGINA, MOSTRAR Q JA ESTA SALVO
window.onload = function() {
    const textoSalvo = localStorage.getItem("minhaAnotacao")
    if(textoSalvo) {
        document.getElementById("anotacao").value = textoSalvo
    }
}

// SALVAR QUANDO CLICAR NO BOTAO
function salvarAnotacao() {
    const conteudo = document.getElementById("anotacao").value
    localStorage.setItem("minhaAnotacao", conteudo)
    alert("Nota salva com sucesso")
}