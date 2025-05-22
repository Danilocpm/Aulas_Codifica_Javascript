// Calcular o fatorial de um numero
function Fatorial(valor) {
    let fatorial = 1
    for(let i = 0; i < valor; i++) {
        fatorial *= (valor-i)
    }

    return fatorial
}

console.log(Fatorial(5))