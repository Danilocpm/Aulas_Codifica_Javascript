let numList = [1,2,3,4,5,6,7,8,9,10]

// Use metodos de array para calcular

// 1- a soma de todos elementos
// 2- a media dos elementos
// 3- Gere um novo array chamado pares que contenha apenas os numeros pares do array original

// Imprima no console

// O array original
// A soma
// A media
// O array dos pares


let soma = 0
let arrayPares = []

for (let i=0; i < numList.length; i++) {
    soma += numList[i]
        if(numList[i] % 2 == 0) {
        arrayPares.push(numList[i])
    }
}


let media = soma / numList.length

console.log("Array original:")
console.table(numList)

console.log("Soma:", soma)
console.log("Média:", media)

console.log("Números pares:")
console.table(arrayPares)

