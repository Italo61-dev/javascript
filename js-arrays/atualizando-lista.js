// DESAFIO - Atualizando elementos -> Criei uma lista de chamada com os seguintes açunos: "João", "Ana", "Caio", "Lara", "Marjorie", "Leo". Porem, a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta sala. atualize a lista.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

       //posição, (2)-> define o tanto de elementos que tirei da lista, após a posição (1)
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);

//Atividade 
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)