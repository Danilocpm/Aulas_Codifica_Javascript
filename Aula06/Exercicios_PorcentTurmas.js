// A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual 
// de aprovados na turma D, calcule e escreva:

//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

// [Exemplo de dados de entrada]
//10 (percentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados na turma D)

// [Saída para os dados de entrada acima]
//6 (quantidade de alunos reprovados na turma C)
//3 (quantidade de alunos reprovados na turma D)
//11.25 (percentual de alunos reprovados em relação ao total de alunos das duas

const prompt = require('prompt-sync')()

let reprovadosC = Number(prompt("O numero de reprovados na turma C: "))
let reprovadosD = Number(prompt("O numero de reprovados na turma D: "))
let reprovadosTotal = reprovadosC + reprovadosD

const turmaC = 60
const turmaD = 20
const turmaTotal = turmaC + turmaD

const porcentagemTurmaC = reprovadosC/turmaC * 100
const porcentagemTurmaD = reprovadosD/turmaD * 100
let porcentagemTotal = reprovadosTotal/turmaTotal * 100

if(reprovadosC > turmaC || reprovadosD > turmaD) {
    console.log("Nao e possivel ter mais reprovados que alunos em uma turma")
}else {
    console.log(`A quantidade de reprovados nas turmas C, D e Total sao respectivamente: ${porcentagemTurmaC}, ${porcentagemTurmaD}, ${porcentagemTotal}`)
    console.log('A quantidade de reprovados nas turmas C, D e Total sao respectivamente:',  100 - porcentagemTurmaC + ',', 100 - porcentagemTurmaD + ',', 100 - porcentagemTotal)
}
