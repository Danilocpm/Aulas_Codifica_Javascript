// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function StrToArray (str) { // receber a string
    let word = '' // var word sendo uma str vazia
    let newStr = [] // array da str
    let sequence = 0 // sequencia de repeticoes

    for(let i = 0; i < str.length; i++) { // for que repete ate o final do str
        if(str.charAt(i) !== ' '){ // se nao for espaco entre palavras preenche a string da word
            word += str.charAt(i)
        } else {
            newStr[sequence] = word // adiciona a palavra no id do array
            sequence++ // aumenta a var de sequencia para proxima palavra ser a proxima do array
            word = '' // reseta a var word para a nova palavra
        }
    }

    if(word) { // se ainda possuir uma palavra adiciona em uma nova posicao do array
        newStr[newStr.length] = word 
    }

    return newStr
}

console.log(StrToArray("olá olá mundo mundo"))