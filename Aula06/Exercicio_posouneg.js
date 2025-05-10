const prompt = require('prompt-sync')()

let valor

do {
    valor = Number(prompt("Insira o numero:" ))

    if(valor > 0) {
        console.log("Positivo")
    } else {
        console.log("Negativo")
    }

} while (valor != 0)