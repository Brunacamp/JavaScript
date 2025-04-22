// 1
class Livro {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    mostrarDetalhes() {
        console.log(`Livro: ${this.titulo} ${this.autor} ${this.paginas}`)
    }
  }
  
  const livro = new Livro("é assim que acaba,", "collen hover,", 388);
  livro.mostrarDetalhes();

  //2
  class ContaBancaria {
    constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    depositar(valor) {
        this.saldo += valor
    }
    sacar(valor) {
        this.saldo -= valor
    }
    verSaldo() {
        console.log(`titular: ${this.titular}, saldo: ${this.saldo}`)
    }
  }

  const conta = new ContaBancaria ("bruna", 400);
  conta.depositar(100);
  conta.sacar(50);
  conta.verSaldo();

  //3
  class Pet {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  
    falar(fala) {
        console.log(`nome: ${this.nome}, especie: ${this.especie}, idade: ${this.idade}, faz: ${fala}`)
    }
  }

  const animal = new Pet ("thor", "cachorro", 2);
  animal.falar("auau");


  //4
  class Filme {
    constructor(titulo, duracao, genero ) {
      this.titulo = titulo;
      this.duracao = duracao;
      this.genero = genero;
    }
  
    assistir() {
        console.log(`Você está assistindo ${this.titulo}, que dura ${this.duracao} minutos.`)
    }
  }

  const filme = new Filme ("Corra", 100);
  filme.assistir();

  //5
  class Musica {
    constructor(titulo, artista, tempo ) {
        this.titulo = titulo;
        this.artista = artista;
        this.tempo = tempo;
      }
    
      tocar() {
          console.log(`tocando ${this.titulo} de ${this.artista}`)
      }
  }

  const musica = new Musica("amor puro", "Djavan")
  musica.tocar();