// importando módulos
//importando um único recurso
// import soma from './src/calculadora.js';

// importando multiplos recursos/módulos - maneira atual
// import { soma, subtrai, multiplica, divide } from './src/calculadora.js';

// importando módulo commonJS
const { soma, subtrai, multiplica, divide } = require('./src/calculadora.js');

console.log('----------------------------------------');

let resultadoSoma = soma(2, 2);
let resultadoSubtrai = subtrai(8, 2);
let resultadoMultiplica = multiplica(5, 5);
let resultadoDivide = divide(16, 4);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtrai}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);
