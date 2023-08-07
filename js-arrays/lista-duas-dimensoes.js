// Desafio -> de a nota para cada um dos alunos
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`O aluno da posição 0 da lista de alunos é: ${listaDeAlunosEMedias[0][0]}. E sua nota é ${listaDeAlunosEMedias[1][0]}.`)
console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}. E sua nota é ${listaDeAlunosEMedias[1][1]}.`)
console.log(`A aluna da posição 2 da lista de alunos é: ${listaDeAlunosEMedias[0][2]}. E sua nota é ${listaDeAlunosEMedias[1][2]}.`)
console.log(`O aluno da posição 3 da lista de alunos é: ${listaDeAlunosEMedias[0][3]}. E sua nota é ${listaDeAlunosEMedias[1][3]}.`)

//Com base nessa matriz, qual dos códigos abaixo eu posso utilizar para imprimir a frase “Leonardo tem idade 28”?
const funcionarios = [["Ana", "Juliana", "Leonardo"],[30, 35, 28]];

console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)