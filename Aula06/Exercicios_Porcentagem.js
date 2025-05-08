const prompt = require('prompt-sync')()

let QntdeEleitores = Number(prompt("Insira o numero de Eleitores da Eleicao: "))
let VotosBrancos = Number(prompt("Insira o numero de Votos em Branco: "))
let VotosNulos = Number(prompt("Insira o numero de Votos Nulos: "))
let VotosValidos = QntdeEleitores - (VotosBrancos+VotosNulos)

console.log('A % respectiva da eleicao foi a seguinte:', VotosValidos/QntdeEleitores * 100, 'para votos validos,', VotosBrancos/QntdeEleitores * 100, 'para votos brancos e',VotosNulos/QntdeEleitores * 100, 'para votos nulos' )