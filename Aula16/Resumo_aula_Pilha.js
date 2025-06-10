// Pilha
// First in Last out (FiLo)
// Voce pode usar uma lista para implementar uma pilha

class Node {
    constructor(value){
        this.value = value
        this.next = null

    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(value) {
        let newNode = new Node(value) // cria o node da class
        newNode.next = this.top // coloca o next do node atual que esta no topo como o novo node criado
        this.top = newNode  // determina o novo node como o topo

    }

    pop() {
        if(!this.top) { // se nao houver top a pilha esta vazia
            return null
        }

        let poppedValue = this.top.value // variavel com o valor atual do topo da pilha
        this.top = this.top.next // novo topo determinado com o valor do proximo da lista
        return poppedValue // retorna o valor retirado e armazenado na variavel


    }

    peek() {
        if(!this.top) {
            return null
        } 
        else {
            return this.top.value
        }
    }

    isEmpty() {
        if(!this.top) {
            return this.top === null
        }
    }







}

const pilha = new Stack

pilha.push(10)
pilha.peek()
pilha.push(20)
pilha.peek()
pilha.push(30)
pilha.peek()
pilha.pop()
pilha.peek()
pilha.isEmpty()

