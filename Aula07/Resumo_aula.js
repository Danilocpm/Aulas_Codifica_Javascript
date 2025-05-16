// Vetores Unidimensionais ou Arrays, sao enderecoes na memoria, ordenados iniciando por 0 e NO JAVASCRIPT ELE E UM OBJETO

// Exemplos de Array
let fruitlist = []
let nameList = Array('Danilo', 'Erton', 'Fabiana') // Pode ser criado vazio ou ja com dados

// Nomeando elementos em um Array
fruitlist[0] = 'Banana'
fruitlist[1] = 'Pera'

// fruitlist['Vermelha'] = 'Morango' // Exemplo de array multidimensional 

console.log(fruitlist)

// Console.table mostra em forma de tabela
console.table(nameList)

// Metodo push = adicionar no final do array
fruitlist.push('Uva')
console.table(fruitlist)

// Metodo unshift = adicionar no inicio do array
fruitlist.unshift('Manga')
console.table(fruitlist)

// Metodo pop = remove o ultimo elemento do array
fruitlist.pop()
console.table(fruitlist)

// Metodo shift = remove o primeiro elemento do array
fruitlist.shift()
console.table(fruitlist)

// Pesquisar o id do elemento no array | Retornar -1 quer dizer que nao existe
elementoIndex = fruitlist.indexOf('Banana')
console.log(elementoIndex)

// Exibir um elemento pelo seu id
console.log(fruitlist[1])

