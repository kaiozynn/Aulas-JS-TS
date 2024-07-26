import { name as nome, soma, idade } from './export' // as (como) muda o nome das variáveis já na importação e na exportação
import * as newModule from './export' // cria um objeto com todos os itens exportados 

const name = 'João'

console.log(newModule);
console.log(name, soma(5, 8), idade, nome)