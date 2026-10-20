// let - declara variaveis mutaveis
// const - declara variaveis imutaveis
// var - forma tradicional, redeclara
// if | else - condicionais

console.log("Olá Mundo!");
let aluno = "Ciclano";
let nota1 = 4.9;
let nota2 = 8.3;
//let media = (nota1 + nota2) / 2;
let media = Math.round((nota1 + nota2) / 2);

//console.log("O aluno Ciclano teve média de:" + media);
console.log(`O aluno ${aluno} teve média: ${media}`);
//console.log('Nota 1:' + nota1 + 'Nota 2:' + nota2 + 'Média' + media);
console.log('----------------------------------------');

let dados = {
    nome : 'Ciclano',
    idade : 56,
    profissão : 'Ajustador'
};

console.table(dados);
console.log(dados.nome);

console.log('----------------------------------------');

if (media >= 7) {
    console.log('aprovado');
} else {
   console.log('reprovado');
};

console.log('----------------------------------------');

if (media >=7) {
    console.log(`O aluno ${aluno} foi Aprovado`)
} else {
    console.log(`O aluno ${aluno} foi Reprovado`);
};

console.log('----------------------------------------');

//console.log(Math.round(media));
