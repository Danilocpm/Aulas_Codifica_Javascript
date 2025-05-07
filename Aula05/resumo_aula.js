// funcoes para criacao de um loop | lacos de repeticao

// while serve para executar um loop enquanto x condicao e satisfeita

console.log("Metodo While")

let i = 0

while(i <= 10) {
    console.log(i)
    i = i + 1
}


// for cria um loop com uma variavel contadora | usado quando sei quantas repeticoes eu terei

console.log("Metodo For")

for(let x = 0; x <= 10; x++){
    console.log(x)
}

// Do and While faca x coisa enquanto y coisa for verdadeira | sera executado pelo menos uma vez ao contrario do While padrao

console.log("Metodo Do and While")

let y = 11

do{
    y++
    console.log(y)
} while(y <= 10)
