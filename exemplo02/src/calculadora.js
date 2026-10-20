function soma(valor1, valor2) {
    return valor1 + valor2
}

console.log(soma(2, 2));

function subtrai(valor1, valor2) {
    return valor1 - valor2
}

console.log(subtrai(8, 2));

function multiplica(valor1, valor2) {
    return valor1 * valor2
}

console.log(multiplica(5, 5));


function divide(valor1, valor2) {
    return valor1 / valor2
}

console.log(divide(16, 4));

// Criação de modulos no Node (pesquise modulos Node)
// exportando uma única função

// exportando um recurso

// export default soma;

// exportando diversos recursos ao mesmo tempo

// export { soma, subtrai, multiplica, divide };

// forma antiga de exportar módulos(não precisa do package.json)
module.exports = { soma, subtrai, multiplica, divide };

// exportando para reaproveitar via CommonJS (padrão)

/* const operacoes = { soma, subtrai, multiplica, divide };
export default operacoes */
