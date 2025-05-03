// Posso declarar uma variavel diretamente, mas nao se deve fazer isso
idade = 17

// Let e uma variavel local
let name = 'Danilo'

// Var e uma variavel universal (descontinuado)
var sobrenome = 'Carneiro'

// Const e uma variavel constante | nao pode ser alterado
const cidadania = 'Brasileira'

// Typeof serve para mostrar o tipo do valor | js determina o tipo de maneira dinamica
console.log(typeof(name))

// tipo nulo | reservar um espaco na memoria com um valor nulo
let mundiaisDoPalmeiras = null

// tipo booleano | true or false
let cursandoFaculdade = true

// operacoes matematicas
let num1 = 6
let num2 = 3

console.log(num1 + num2) // soma
console.log(num1 - num2) // subtracao
console.log(num1 / num2) // divisao
console.log(num1 * num2) // multiplicacao
console.log(num1 ** num2) // elevar um numero por outro
console.log(num1 % num2) // resto da divisao
console.log(++num1) // iteracao pre numero | -- e o efeito contrario
console.log(num1++) // iteracao pos numero | -- e o efeito contrario
console.log(num1 > num2) // maior
console.log(num1 < num2) // menor
console.log(num1 <= num2) // menor ou igual
console.log(num1 >= num2) // maior ou igual
console.log(6 == 6) // pergunta se tem o msm valor
console.log(6 == '6') // pergunta se tem o msm valor
console.log(6 === '6') // pergunta se tem o msm valor e tipo
console.log(10 != '10') // se e diferente
console.log(10 !== '10') // se e diferente em valor e tipo
console.log((10 > 5) && (10 > 6)) // operador logico de adicao
console.log((10 > 6) || (10 > 11)) // operador logico de ou
console.log(!(10 < 5) || !(10 > 2)) // operador ! inverte o sentido da operacao

// parse e uma palavra reservada para mudar o tipo da variavel
let num3 = "4"
console.log(num3 + 10)
console.log(parseInt(num3) + 10)

// Incremento superior a 1
let counter = 1
let step = 2

counter += step // soma o valor e substitui a variavel
console.log(counter)

// If e Else para determinar resultados por true or false
const nota = 70

if(nota > 60) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

// exemplo
// se o usuario tiver entre 18 e 32 anos, ele pode se inscrever no concurso, caso contrario nao pode

let idade1 = 40

if((idade1 >= 18) && (idade1 <=32)){
    console.log('Permitido')
} else {
    console.log('Bloqueado')
}

// caso de else if para ter mais de uma alternativa | condicional composta
let nota1 = 70

if(nota1 >= 90) {
    console.log('Aprovado com honraria')
} else if(nota1 >= 70) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}