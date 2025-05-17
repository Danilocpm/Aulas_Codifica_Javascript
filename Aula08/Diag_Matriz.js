let matriz = []

for(let i = 0; i < 10; i++) {
    matriz[i] = []
    for(let j = 0; j < 10; j++){
        matriz[i][j] = 2
    }
}

let diagonal = 0
let n = matriz.length

for(let i = 0; i < n; i++) {
        diagonal += matriz[i][i]
        
}

console.table(matriz)
console.log(diagonal)