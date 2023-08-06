// =>Objeto
// const Livro = {
//    nome: "React Native",
//    editora: "Casa do Código",
//    paginas: 185,
//    anunciar: function(){
//        console.log("A Alura indica o livro " + this.nome + "!")
//    }
// }

// Livro.anunciar()

// ////////////////////////////////////////

// =>função
// const Livro = function(nome, editora, paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas,

//     this.getNome = function(){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do código", 143)
// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

////////////////////////////////////////////

// => classes

class Livro {
    //construção    //parâmetros
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do código", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()


// estensões de classes: exemplo abaixo
// liga a classe de cima 
class LivroColecao extends Livro {
    constructor (nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }
    descrevercolecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgamacao = new LivroColecao("Lógica de Progamação", "Comece a progamar")
LogicaDeProgamacao.descrevercolecao()