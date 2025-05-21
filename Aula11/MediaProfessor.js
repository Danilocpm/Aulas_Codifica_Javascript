let professor = {
    nome: 'Fabio',
    notas: {
        aluno1: [3,5],
        aluno2: 6,
        aluno3: 9

    }
}

function mediaProfessor() {
    NumNotas = 0
    SomaNotas = 0

    for(let aluno in professor.notas) {
        let nota = professor.notas[aluno]

        if (Array.isArray(nota)) { // Pergunta se é um array
            for(let n of nota) {
                SomaNotas += n
                NumNotas++
            }
        } else {
            SomaNotas += nota
            NumNotas++
        }
    }

    return SomaNotas/NumNotas
}

console.log(mediaProfessor())