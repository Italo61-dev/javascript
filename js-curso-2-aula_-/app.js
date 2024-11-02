let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número de 1 a 10');
}

mensagemInicial();

function verificarChute () {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTenativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirNaTela('p', mensagemTenativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        reniciarJogo();
    } else if (chute < numeroSecreto) {
        exibirNaTela('p', 'O número secreto é maior')
    } else {
        exibirNaTela('p', 'O número secreto é menor')
    }
    tentativas++
    limparCampo()
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}