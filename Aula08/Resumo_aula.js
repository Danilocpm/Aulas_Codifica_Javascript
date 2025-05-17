const numeros = [1,2,3,4,5,6,7,8,10,9]

// Metodo reduce soma todos os valores de um array 
const soma = numeros.reduce((acumulador, valor) => acumulador + valor,0)
console.log(soma)

// Funcao de filtro
const pares = numeros.filter(num => num % 2 === 0)
console.log(pares)

// Funcao de sort | Ordena os valores do array
const crescente = numeros.sort((a,b) => a - b)
console.table(numeros)

// Arrays multidimensionais | Inserir arrays dentro de arrays
let matriz = []

matriz[0] = ['a','b','c','d']
matriz[1] = [1,2,3,4]

console.table(matriz)