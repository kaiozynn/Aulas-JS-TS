const _vel = Symbol('velocidade'); // cria uma variavel para tornar um elemento privado
class Carro {
  constructor(nome) { // No lugar de usar o nome da class, se usa o nome, constructor
    this.nome = nome;
    this[_vel] = 0;
  }

  set velocidade(valor) { //Só lembrar de java KKKKKKKKKKKK
    this[_vel]  = valor;
  }

  get velocidade() { // so lembrar de java KKKKKKKK
    return this[_vel];
  }

  acelerar() {
    if(this[_vel] >= 100) return;
    this[_vel]++;
  }

  freiar() {
    if(this[_vel] < 0) return;
    this[_vel]--;
  }
}

const c1 = new Carro('fusca');

for(let i = 0; i <= 200; i++) {
  c1.acelerar();
}
c1.velocidade = 5;
console.log(c1.velocidade)