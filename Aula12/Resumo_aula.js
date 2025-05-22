// For each é uma função para arrays que é executada a cada iteração

const livraria = [
    {titulo: 'Codigo Limpo', ano: 2020},
    {titulo: 'Cronicas de Narnia', ano: 1989},
    {titulo: 'Arquitetura Limpa', ano: 2020},
    {titulo: 'Hobbit', ano: 1999}

]

livraria.forEach(element => {
    console.log(element)
})


let contagem = []
// Exemplo de contagem de livros de anos iguais
livraria.forEach(element => {
    if(contagem[element.ano]) {
        contagem[element.ano]++
    } else {
        contagem[element.ano] = 1
    }
})

console.log(contagem)