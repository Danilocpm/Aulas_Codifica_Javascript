// Declarar um objeto em javascript
let filme = {
    nome: 'Hatsune Miku',
    dataLancamento: '21-01-2025',
    personagens: ['Hatsune Miku', 'Len', 'Rin'],
    status: 1,
    dublagens: {
        ptbr: 1,
        eng: 1,
        jp: 1,
        ptpt: 0
    },

    mostrarcaracteristica: function() {
        return `Os personagens do filme são ${this.personagens}` // referencia de this porque se refere ao proprio objeto
    }


}

console.log(filme.mostrarcaracteristica()) // referenciar o objeto da função

// Outro exemplo
let livro = {
    titulo: 'Hobbit',
    autor: 'Tolkien',
    ano: 1925,

    mostrarcaracteristicas: function() {
        return `O titulo do livro é ${this.titulo}, o seu autor é o ${this.autor} e foi publicado em ${this.ano}`
    }

}

console.log(livro.mostrarcaracteristicas())

// Tenho como atrelar o valor de um objeto a uma variavel
let livro2 = livro
console.log(livro2)

// Tenho também como adicionar metodos a um objeto por fora sendo por ele mesmo ou uma variavel de msm valor
livro2.nota = 9.5
livro.numDePaginas = 434
console.log(livro)
console.log(livro2)

// Função construtora de objetos
function anime(nome,numDeTemps,nota) {
    this.nome = nome
    this.numDeTemps = numDeTemps
    this.nota = nota

    this.mostrarAnime = function() {
        return `
        Nome: ${this.nome}
        Numero de temporadas: ${this.numDeTemps}
        Nota: ${this.nota}
        `
    }

}

let frieren = new anime('Frieren', 1, 9.5) // Criando um novo objeto
let Apothecary_Diaries = new anime('Apothecary Diaries', 2, 9.0)

console.log(frieren.mostrarAnime()) // Utilizando o objeto e sua função interna
console.log(Apothecary_Diaries.mostrarAnime())

// Em objetos não possuimos index então para percorrer eles em um array usamos
// As seguintes funções de array

// Metodo in (o valor key pode ser qualquer valor)
let personagens = [{nome: 'Killua'}, 'Minato', 'Ace']

for(let key in personagens) {
    console.log(personagens[key])
}

// Metodo of (para obsjetos e arrays iteraveis)

let palavra = 'palavra'


for(let char of palavra) { // Por exemplo aqui ele me retornara os caracteres tratando a variavel como um array
    console.log(char)
}

for(let personagem of personagens) { // Aqui ele retornara algo muito semelhante ao in, mas ele pega a posição
    console.log(personagem)
}

for(let personagem of personagens) { // Isso permite pesquisar pelo nome por exemplo
    console.log(personagem.nome)
}

for(let personagem of Object.keys(personagens)) { // Aqui eu utilizo o array como keys e consigo resgatar os seus "index"
    console.log(personagem)
}