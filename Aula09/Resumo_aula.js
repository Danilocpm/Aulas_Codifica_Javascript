// Declarando um array multidimensional dentro de um array usando strings
let listadecoisas = []
listadecoisas['hardware'] = []
listadecoisas['hardware'][0] = 'placa mae'
listadecoisas['hardware'][1] = 'placa de video'

listadecoisas['Filmes'] = ['Batman']
listadecoisas['Filmes'][1] = 'Avengers'

console.table(listadecoisas)

// Criando uma function em js

// Definição da função | Escopo de bloco tudo dentro dele existe apenas dentro dele
function ParOuImpar(valor) {
    let resultado
    if(valor % 2 === 0) {
        resultado = 'Par'
    } else {
        resultado = 'Impar'
    }

    return resultado // Retorna o valor para ser usado fora do bloco | Procedimento é em casos que ela não retorna nada
}

let verificarParOuImpar = ParOuImpar(3) // Chamada da função
console.log(verificarParOuImpar)

// Outro exemplo mas com 2 variaveis

function CalcularAreas(altura, largura) {
    let resultado = altura * largura
    console.log(resultado)
}

CalcularAreas(10, 10)

// Variavel com uma função

let teste = function() {
    console.log('Teste')
}

console.log(teste)

// Arrow function | refere-se a um callback
let exemplo = () => {
    console.log('Exemplo')
}

console.log(exemplo)

// Exemplo maior
function MensagemDeDebug(sucess,error) {
    if(true) {
        sucess('O teste foi um sucesso')
    } else {
        error('O teste foi um fracasso')
    }
}

let callback = (message) => {console.log(message)}

MensagemDeDebug(callback)