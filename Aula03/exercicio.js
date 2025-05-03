// verificar se um numero e par ou impar

let numero = 7
let divisao = numero % 2

if(divisao == 1) {
    console.log('Este numero e impar')
} else {
    console.log('Este numero e par')
}


// encontre o maior valor de 3 numeros
let x = 7
let y = 5
let z = 3

if ((x > y) && (x > z)) {
    console.log('o maior numero e' + x)
} else if ((y > x) && (y > z)) {
    console.log('O maior numero e' + y)
} else {
    console.log('O maior numero e' + z)
}