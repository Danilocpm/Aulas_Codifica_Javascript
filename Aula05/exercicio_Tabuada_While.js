const prompt = require('prompt-sync')()

let valor = Number(prompt("Insira um valor: "))
let tabuada = Number(prompt("Insira o numero de repeticoes que deseja: "))
let resultado = ''
let i = 1

while(i <= tabuada) {
    resultado = valor * i
    console.log(valor,"*",i, "=", resultado)
    i++

}