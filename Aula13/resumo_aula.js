// Recursividade é chamar uma função dentro dela mesma
function fatorial(n) {
    if(n === 0) {
        return 1
    } else {
        return n * fatorial(n-1) // chamo a função novamente
    }

}

console.log(fatorial(5))

// TAD - Tipos Abstratos de Dados
// Abstração = forma de exibir os dados ao usuario
// Encapsulamento = empacotar dados em uma estrutura
// Ocultação de informação = interage diretamente com a interface
// Separação entre interface e implementação = como voce vai implementar os dados em uma interface