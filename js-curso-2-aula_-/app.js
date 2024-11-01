let numeroSecreto = gerarNumeroAleatorio();

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNaTela('h1', 'Jogo do número secreto');
exibirNaTela('p', 'Escolha um número de 1 a 10');


function verificarChute () {
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}