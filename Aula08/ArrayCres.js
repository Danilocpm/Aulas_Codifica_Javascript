// Ordene um array em ordem crescente e apos isso calcule a media e sua soma
// Exemplo de bubble sort abaixo

let numero = [8,7,5,4,1,2,3,6,9,10]
let n = numero.length

for (let i = 0; i < n - 1; i++) {
    for(let j = 0; j < n - 1 - i; j++) { // repete para todos os numeros e o -i nao permite repetir o mesmo numero
        if(numero[j] > numero[j + 1]) { // 8 > 7
            const temp  = numero[j] // armazena valor 8 no temp
            numero[j] = numero[j + 1] // em numero[0] o novo valor sera 7 
            numero[j + 1] = temp // em numero[1] o novo valor sera 8

        }
    }
}

let soma = numero.reduce((acumulador, valor) => acumulador + valor, 0 )
let media = soma / numero.length

console.table(numero)
console.log(`A soma do array: ${soma}`)
console.log(`A media do array: ${media}`)