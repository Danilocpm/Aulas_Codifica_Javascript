const prompt = require('prompt-sync')()

let senha = 12345
let insert

do{
    insert = prompt("Insira a senha: ")

    if(senha != insert) {
        console.log("Senha errada")
    }else {
        console.log("Senha correta")
    }

}while(senha != insert)