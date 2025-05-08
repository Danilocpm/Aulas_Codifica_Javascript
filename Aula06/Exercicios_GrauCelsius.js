const prompt = require('prompt-sync')()

let C = Number(prompt("Insira uma temperatura em Graus Celsius: "))
let F = ''
const formula = (9*(C/5))+32

F = formula
console.log(`${C} celsius e equivalente a ${F} Fahrenheit`) 