// Recursividade é chamar uma função dentro dela mesma
function fatorial(n) {
    if(n === 0) {
        return 1
    } else {
        return n * fatorial(n-1) // chamo a função novamente
    }

}

console.log(fatorial(5))