class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const aluno1 = new pessoa ("Bruna", 17)
// aluno1.apresentar();

class carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirInfo(){
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}
const meuCarro = new carro ("hyundai", "HB20", 2023)
// meuCarro.exibirInfo()

class Aluno {
    constructor(nome, nota) {
      this.nome = nome;
      this.nota = nota;
    }
  
    verificarAprovacao() {
      if (this.nota >= 6) {
        console.log(`${this.nome} foi aprovado(a)!`);
      } else {
        console.log(`${this.nome} foi reprovado(a).`);
      }
    }
  }
  
  const aluno = new Aluno("Maria", 7.5);
  aluno1.verificarAprovacao();