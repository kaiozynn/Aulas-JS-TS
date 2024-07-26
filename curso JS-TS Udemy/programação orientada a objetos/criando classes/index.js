class Pessoa {
  constructor(nome, sobrenome) { // Caso eu queira passar parametros
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  };

  comer() {
    console.log(`${this.nome} está comendo`);
  };

  beber() {
    console.log(`${this.nome} está bebendo`);
  }

}

const p1 = new Pessoa('Caio', 'Ferreira');
console.log(p1.falar())