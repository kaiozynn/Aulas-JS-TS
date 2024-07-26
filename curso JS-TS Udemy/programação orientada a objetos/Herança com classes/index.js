class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
    console.log(`Ligando o ${this.nome}`);
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
    console.log(`Desligando o ${this.nome}`)
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome) {
    super(nome);
  }
}