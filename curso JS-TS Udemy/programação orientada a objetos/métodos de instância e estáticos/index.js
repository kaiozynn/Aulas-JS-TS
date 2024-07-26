class ControleRemoto {
  constructor(tv) {
    this.tv  = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() { //método de instância
    this.volume -= 2;
  }

  //Método statico 
  static trocaPilha() {
    console.log('Ok vou trocar')
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

ControleRemoto.trocaPilha(); //Só consigo acessar esse método a classe pai;
console.log(controle1)