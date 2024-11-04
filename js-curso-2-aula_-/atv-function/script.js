let nome = 'Italo';

function saudacao(){
    console.log(`Olá, ${nome}!`)
}

saudacao();

let numero = 0;

function dobro(numero){
    return numero * 2;
}

console.log(dobro(5));

let num1 = 0;
let num2 = 0;
let num3 = 0;

function media(num1, num2, num3){
    let soma = num1 + num2 + num3;
    let resultado = soma / 3;
    return resultado
}

console.log(media(10, 10, 10));

function numeroMaior(num1, num2){
    return Math.min(num1,num2);
}

console.log(numeroMaior(9,11));

function numeroXNumero(a){
    return a * a;
}

console.log(numeroXNumero(3));