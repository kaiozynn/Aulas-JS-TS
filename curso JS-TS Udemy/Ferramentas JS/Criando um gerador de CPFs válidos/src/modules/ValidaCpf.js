export default class ValidaCpf {
  constructor(cpfEnviado='0') {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: false,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  isSequence() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraDigito(cpfSemDigito) {
    let total = 0;
    let reverso = cpfSemDigito.length + 1;

    for(let stringNumerica of cpfSemDigito) {
      total += Number(stringNumerica) * reverso;
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  geraNovoCpf() {
    const nineDigits = this.cpfLimpo.slice(0, -2);
    const oneDigite = this.geraDigito(nineDigits);
    const twoDigite = this.geraDigito(nineDigits + oneDigite)

    return this.validarIgualdade(nineDigits + oneDigite + twoDigite);
  }

  validarIgualdade(cpf) {
    return cpf === this.cpfLimpo;
  }

  validar() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequence()) return false
    if (this.geraNovoCpf()) return true
    return false;
  }
}