// Calculadora simples com as 4 operacoes principais (soma, subtracao, multiplicacao e divisao)

const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira primeiro valor: "))
let valor2 = Number(prompt("Insira primeiro valor: "))
let operacao = prompt("Escolha qual operacao deseja usar (+, -, /, *): ") 
let resultado = 0


// Estrutura utilizando if e else

/* if(operacao === '+') {
    resultado = valor1 + valor2
}else if(operacao === '-') {
    resultado = valor1 - valor2
}else if(operacao === '/') {
    if(valor2 !== 0) {
        resultado = valor1/valor2
    }else {
        console.log("Nao e possivel dividir um numero por 0")
        resultado = undefined
    }
    
}else if(operacao === '*') {
    resultado = valor1 * valor2
}else {
    console.log("operacao invalida")
    resultado = undefined
}

if(resultado !== undefined) {
    console.log('O seu valor e: ' + resultado)
}else {
    console.log("Algo deu errado na sua operacao")
} */


// Calculadora simples com as 4 operacoes principais (soma, subtracao, multiplicacao e divisao) | Utilizando switch
switch(operacao) {
    case '+':
        resultado = valor1 + valor2
        break
    case '-':
        resultado = valor1 - valor2
        break
    case '/':
        if(valor2 != 0) {
            resultado = valor1 / valor2
        } else {
            resultado = undefined
            console.log("Numeros nao podem ser divididos por 0")
        }
        break
    case '*':
        resultado = valor1 * valor2
        break
    default:
        console.log("operacao invalida")
        resultado = undefined
        break    

}

if(resultado !== undefined) {
    console.log('O seu valor e: ' + resultado)
}else {
    console.log("Algo deu errado na sua operacao")}