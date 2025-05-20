function vogais(array) {
    let vogais = ['a','o','e','i','u']
    array = array.split('')
    let arrayFiltrado = []

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < vogais.length; j++) {
            if(array[i] === vogais[j]) {
                arrayFiltrado.push(array[i])
            }

        }
    }

    return arrayFiltrado
}

console.log(vogais('Danilo'))