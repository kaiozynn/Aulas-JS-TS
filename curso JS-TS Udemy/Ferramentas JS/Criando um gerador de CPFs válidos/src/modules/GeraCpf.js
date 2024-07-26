import ValidaCpf from "./ValidaCpf";

export default class GeraCPF {

  rand(min=100000000, max=999999999) {
    return String(Math.floor(Math.random() * (max-min) + min));
  }

  gerar() {
    const newCpf = new ValidaCpf();
    const cpfClean = this.rand();
    const firstDigite = newCpf.geraDigito(cpfClean);
    
    return String(cpfClean + firstDigite + secondDigite);
  }
}
