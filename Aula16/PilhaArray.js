// Pilha feita com arrays

function Stack() {
    this.pilha = [] // Cria o array
    this.top = -1 // Determina o topo como -1

    this.push = function(value) {
        this.top++ // Aumenta em um o index do topo
        this.pilha[this.top] = value // No array usa o top que seria o index do topo e preenche nele com o valor
    }

    this.pop = function() {
        if(this.top < 0) return null // Se top for -1 o array e vazio
        let value = this.pilha[this.top] // Var value com o valor atual do topo da pilha
        this.pilha[this.top] = undefined // Array no index do topo se torna nao definido
        this.top-- // reduz o index do topo
        return value // retorna o valor que foi tirado
    }

}

let Pilha = new Stack()

Pilha.push(10)
Pilha.push(20)
Pilha.push(30)
console.log(Pilha)
Pilha.pop()
console.log(Pilha)
