

const perguntas = [
    {
        pergunta: "Qual foi a principal atividade econômica no Brasil durante o século XVI?",
        opcoes: ["Exploração de ouro", "Cultivo de café","Produção de açúcar","Indústria têxtil"],
        correta: 2
    },
    {
        pergunta: "Qual medida caracteriza o Estado Novo (1937–1945), instaurado por Getúlio Vargas?",
        opcoes: ["Redemocratização do país com eleições diretas", " Estabelecimento de uma nova constituição autoritária", "Adoção do parlamentarismo", "Nacionalização de todas as indústrias estrangeiras"],
        correta: 1
    },
    {
        pergunta: "O que é o desmatamento?",
        opcoes: ["Retirada da cobertura vegetal de uma área, geralmente de forma predatória","Processo de formação natural de florestas","Aumento da biodiversidade em regiões urbanas","Aumento da cobertura florestal por reflorestamento artificial"],
        correta: 0
    },
    {
        pergunta: "O que caracteriza a favelização nas grandes cidades brasileiras?",
        opcoes: ["A construção de áreas planejadas pelo Estado.", "Crescimento desordenado de habitações em áreas irregulares.", "Desenvolvimento de bairros de classe média com infraestrutura completa", "Aumento de áreas verdes em centros urbanos"],
        correta: 1
    },
    {
        pergunta: "Qual era a principal proposta filosófica de Sócrates?",
        opcoes: ["Buscar a verdade por meio do método dialético e do autoconhecimento", "Explicar o mundo por meio da mitologia", "Defender a autoridade absoluta dos governantes", "Desenvolver teorias científicas baseadas em experimentos naturais."],
        correta: 0
    },
    {
        pergunta: "O Iluminismo foi um movimento que defendia:",
        opcoes: ["A fé como única forma legítima de conhecimento", "A autoridade absoluta da monarquia", "A razão como base para a organização da sociedade", "O retorno aos valores da Idade Média"],
        correta: 2
    },
    {
        pergunta: "O que é aculturação?",
        opcoes: ["Processo de perda ou modificação cultural por influência de outro grupo.", " Isolamento total de uma cultura frente a outras", "Desenvolvimento de uma cultura superior", "Valorização exclusiva da cultura de origem"],
        correta: 0
    },
    {
        pergunta: "De acordo com Karl Marx, o que caracteriza a mais-valia?",
        opcoes: [" Lucro obtido a partir da diferença entre o valor produzido pelo trabalhador e o salário pago", "Participação igualitária dos trabalhadores nos lucros", "Remuneração justa conforme a carga horária", " Acúmulo de bens pelos consumidores"],
        correta: 0
    },
    {
        pergunta: "O que caracteriza os países considerados subdesenvolvidos?",
        opcoes: ["Alto índice de industrialização e qualidade de vida.", "Baixo IDH e dependência econômica de países desenvolvidos", "Predomínio de atividades financeiras e tecnológicas", "Forte presença de multinacionais nacionais"],
        correta: 1
    },
    {
        pergunta: "Qual foi um dos principais motivos para o início da Segunda Guerra Mundial?",
        opcoes: ["A expansão militarista da Alemanha nazista na Europa", "A independência dos países africanos", "A queda do Muro de Berlim", "O avanço dos Estados Unidos sobre o Japão"],
        correta: 0
    }
]

// variaveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta esta sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opcao o usuario selecionou

const pergunta = document.getElementById ( "pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// funcao que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}
//funcao que mostra a pergunta atual
function mostrarPergunta() {
    //Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    // Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" //limpa as opcoes anteriores

    // Cria um botao para cada opcao de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement ("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () =>
        selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

// Para quando o usuário escolher uma opção
function selecionarOpcao(indice){
    opcaoSelecionada = indice
    // Atualiza o visual da opção selecionada
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false //habilita o botão de proxima
}

function mostrarPontuacao ( ) {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}    
// Funcao para ir para a proxima pergunta
botaoProxima.addEventListener ( "click", () =>{
    // Verifica se a resposta esta correta
    if(opcaoSelecionada == perguntas [perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()
    
    perguntaAtual++
    if(perguntaAtual < perguntas. length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

//Botao para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    // Reseta todas as variaveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    // O quiz aparece e a pontuacao final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
// Inicia o quiz com a primeira pergunta
mostrarPergunta()