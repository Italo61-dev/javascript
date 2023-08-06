//parâmetros de funções

//function soma(numero1, numero2) {
//    return numero1 + numero2;
//}



//console.log(soma(2, 2))
//console.log(soma(245, 20))
//console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros 

//function nomeIdade(nome, idade) {
//   return `meu nome é ${nome} e minha idade é ${idade}`
//}

// console.log(nomeIdade("italo", 24))
//function soma(numero1, numero2) {
//    return numero1 + numero2;
//}
    
//function multplicar(numero1, numero2) {
//    return numero1 * numero2
//}

//console.log(multplicar(soma(4, 5), soma(3, 3)));

function soma(numero1, numero2) {
    return numero1 + numero2;
}
    
function multplicar(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}

console.log(multplicar(soma(4, 5)));