function MaiorNum(array) {
    let temp
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < array[i+1]) {
            temp = array[i+1]
        }
    }
    return temp
}

console.log(MaiorNum([1,2,3,4,5,6,7,9,8,20]))