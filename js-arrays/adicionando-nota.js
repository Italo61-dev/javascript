// DESAFIO - Adicionando elementos -> Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno: - 10, 6 e 8 -> Para corrigir, adicione a nota 7 e faça o cálculi  da média correta

// const notas = [10, 6, 8];

// const media = (notas[0] + notas[1] + notas[2]) / notas.length;
// console.log(media);


const notas = [10, 6, 8];
//adiconei a nota com o "push()" colocando o valor da nota entre os parentes, é ele foi para a terceira possição no array
notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);