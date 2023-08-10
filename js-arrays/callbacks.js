const nomes = ["Italo", "Thays", "Lucas"];

nomes.forEach(nome =>{
    console.log(nome)
})



nomes.forEach(function(nome){
    console.log(nome)
})



function imprimiNomes(nome){
    console.log(nome)
}

nomes.forEach(imprimiNomes);