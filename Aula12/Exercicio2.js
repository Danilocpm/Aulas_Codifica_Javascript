// Contar a quantidade de filmes por genero
let filmes = [
    {nome: 'Bataman Begins', genero: 'ação'},
    {nome: 'Minions', genero: 'comedia'},
    {nome: '50 tons de cinza', genero: 'romance'},
    {nome: 'Esqueceram de mim', genero: 'comedia'}

]

function ContarCategorias() {
    let contagem = []
    filmes.forEach(filme => {
       if(contagem[filme.genero]) {
        contagem[filme.genero]++
       } else {
        contagem[filme.genero] = 1
       }
    })

    return contagem
}

console.log(ContarCategorias())