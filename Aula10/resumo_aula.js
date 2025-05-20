// Tratamento de string

console.log('Danilo'.length) // comprimento do valor
console.log('Danilo'.charAt(0)) // primeiro caractere de um valor
console.log('Danilo'.indexOf('i')) // o index de x elemento
console.log('Danilo Carneiro'.replace('Danilo', 'Gabriela')) // troca um valor informado por outro
console.log('Danilo Carneiro'.substring(0,6)) // Valores entre um intervalo
console.log('Danilo'.toUpperCase()) // letra maiuscula
console.log('Danilo'.toLowerCase()) // letra minuscula
console.log('Danilo' + ' Carneiro'.trim()) // remove o espaço
console.log('Danilo'.match(/[aeiou]/gi)) // imprime os valores que dão match

// Tratamento de array

let ArrayName = 'Danilo'.split('') // Separa os caracteres entre '
console.log(ArrayName)
console.log(ArrayName.reverse()) // Inverte a ordem do array
console.log(ArrayName.join('')) // Junta os caracteres

// Tratamento de numeros

console.log(Math.ceil(9.7)) // arredonda um numero para cima
console.log(Math.floor(9.7)) // arredonda um numero para baixo
console.log(Math.round(9.5), Math.round(9.4)) // arredonda um numero normalmente
console.log(Math.sqrt(81)) // raiz quadrada de um numero
console.log(Math.pow(9, 3)) // elevar um numero x por um numero y
console.log(Math.cbrt(9)) // raiz cubica de 9
console.log(Math.abs(-9.123123123)) // valor absoluto
console.log(Math.random()) // valor aleatorio

// Tratamento de horas | dias
let date = new Date()

console.log(date.getDate()) // retorna o dia
console.log(date.getMonth() + 1) // Retorna o mes (o mes começa do 0)
console.log(date.getFullYear()) // Retorna o ano
console.log(date.toString()) // Transforma a data e retorna em string
console.log((date.getMonth() + 1).toString().padStart(2, '0')) // adicionar valores como o 0 para preencher a string
console.log(date.getTime()) // Resultado em milisegundos

// Calculo com datas
let date1 = new Date(2025, 7, 10)
let date2 = new Date(2025, 7, 9)

let milisegundosEntreDatas = Math.abs(date1.getTime()) - Math.abs(date2.getTime()) // Diferença em milisegundos
console.log(milisegundosEntreDatas)

milisegundosPorDia = (1 * 24 * 60 * 60 * 1000) // Vendo a quantidade de milisegundos em 1 dia
console.log(`A diferença de dias entre as duas datas é de ${Math.abs(milisegundosEntreDatas/milisegundosPorDia)} dia`) // Dividindo o resultado para converter em dia