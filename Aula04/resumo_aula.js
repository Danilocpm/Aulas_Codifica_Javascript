// npm e o instalador de pacotes do js
// node modules sao os nossos pacotes instalados
// package-lock.json mantem o versionamento dos nossos pacotes
// package.json sao as dependencias do nosso projeto

// referencia a biblioteca prompt-sync
const prompt = require("prompt-sync")()

// prompt serve para pedir um valor via terminal
let operacao = prompt("Escolha qual operacao deseja usar (+, -, /, *): ")

// voce pode exigir a tipagem dele
let valor2 = Number(prompt("Insira primeiro valor: "))