 const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
 const salaJava = [6, 5, 8, 9, 5, 6]
 const salaPython = [7, 3.5, 8, 9.5]

 function calculaMedia(notasDaSala) {
    const somaDasnotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasnotas / notasDaSala.length;

    return media;
 }

 console.log(`A média da sala de JS é ${calculaMedia(salaJs)}`)
 console.log(`A média da sala de Java é ${calculaMedia(salaJs)}`)
 console.log(`A média da sala de Python é ${calculaMedia(salaJs)}`)