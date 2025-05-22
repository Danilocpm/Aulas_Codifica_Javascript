// Imprima os 10 primeiros numeros da sequencia de fibonnaci
function fibonnaci() {
    let num1 = 0
    let num2 = 1
    let temp

    for(let i = 0; i < 10; i++) {
        console.log(num1)
        temp = num1
        num1 = num2
        num2 = num2 + temp

    }
}

fibonnaci()