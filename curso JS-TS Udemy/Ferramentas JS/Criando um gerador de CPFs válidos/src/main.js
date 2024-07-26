import GeraCpf from './modules/GeraCpf';
import ValidaCpf from './modules/ValidaCpf';
import './assets/css/style.css'

const gerarCpf = new GeraCpf();
const validaCpf = new ValidaCpf(gerarCpf.gerar());
console.log(validaCpf.validar())
