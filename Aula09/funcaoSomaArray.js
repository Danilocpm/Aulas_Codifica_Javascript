function SomaArray (array) {
    let resultado = 0
    for(let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado
}

console.log(SomaArray([1,2,3,4,5,6,7,8,9,10]))