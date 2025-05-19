function OrdenarArray(array) {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - 1 - i; j++) {
            if(array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }

    }
    return array
}

console.log(OrdenarArray([1,4,7,2,3,5]))
