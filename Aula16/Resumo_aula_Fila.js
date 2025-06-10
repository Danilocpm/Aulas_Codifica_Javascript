// Fila
// First in First out (Fifo)
// Voce pode usar uma lista para implementar uma fila

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }


}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
}