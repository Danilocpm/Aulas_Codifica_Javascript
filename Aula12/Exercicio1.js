// Verificar dentro de uma lista de livros aqueles que são publicados antes de 2000

const livraria = [
    {titulo: 'Codigo Limpo', ano: 2019},
    {titulo: 'Cronicas de Narnia', ano: 1989},
    {titulo: 'Arquitetura Limpa', ano: 2020},
    {titulo: 'Hobbit', ano: 1999}

]

function livros2000 () {
    let livros99 = []
    for(let livros of livraria) {
        if(livros.ano < 2000) {
            livros99.push(livros)
        }

    }

    return livros99
}

console.log(livros2000())