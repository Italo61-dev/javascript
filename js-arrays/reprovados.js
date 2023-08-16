const alunos = ['Ana ', 'Marcos ', 'Maria ', 'Mauro '];
const notaAna = [8, 8, 6, 7.5];
const notaMarcos = [4, 4.5, 8, 7.5];
const notaMaria = [3, 4.5, 5, 7.5];
const notaMauro = [6, 4.5, 8, 7.5];

const notas = [notaAna, notaMarcos, notaMaria, notaMauro]; // Array de arrays de notas

const mediaParaPassar = 7;

const reprovados = alunos.filter((aluno, indice) => {
    const mediaAluno = notas[indice].reduce((soma, nota) => soma + nota, 0) / notas[indice].length;
    return mediaAluno < mediaParaPassar;
});

console.log(`Alunos Reprovados: ${reprovados}`);
