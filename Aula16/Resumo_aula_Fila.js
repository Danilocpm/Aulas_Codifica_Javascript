// Fila
// First in First out (Fifo)
// Voce pode usar uma lista para implementar uma fila

class Node {
    constructor(value) {
        this.value = value // o valor do objeto
        this.next = null // valor do proximo da fila
    }


}

class Queue {
    constructor() {
        this.front = null // valor do primeiro elemento da fila
        this.rear = null // valor do ultimo elemento da fila
        this.size = 0 // tamanho da fila
    }

    enqueue(value) {
        let newNode = new Node(value) // cria um novo objeto
        if (this.isEmpty()) { 
            this.front = newNode // como a fila ta vazia entao o novo objeto sera o primeiro lugar
            this.rear = newNode // como a fila ta vazia entao o novo objeto sera o ultimo lugar
        } 
        else {
            this.rear.next = newNode // ao inserir um novo objeto ele deve ser o proximo do atual ultimo
            this.rear = newNode // o novo objeto se torna o ultimo da fila
        }

        this.size++ // aumenta a var de tamanho da fila


    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        const removedNode = this.front // uma var imutavel para o atual primeiro lugar da fila
        this.front = this.front.next // o novo primeiro lugar se torna o que estava como proximo do primeiro logo o segundo
        if (this.front === null) { // verifica se o next era null portanto era o unico elemento ou nao da fila
            this.rear = null // se era o unico elemento entao a fila nao possui mais ultimo elemento
        }
        this.size-- // diminui a var de tamanho da fila
        return removedNode.value // retorna o valor do objeto removido da fila que esta na const
    }

    isEmpty() { // funcao recursiva para saber se a fila esta vazia ou nao
        return this.size === 0
    }

    print() {
        let current = this.front // cria uma var com o atual primeiro objeto da fila
        const elements = [] // cria um array elementos
        while (current) { // enquanto current existir
            elements.push(current.value) // adiciona o valor do objeto em current ao novo array
            current = current.next // muda o valor de current para o proximo da fila ate chegar em next = null
        
        }
        console.log(elements.join('->')) // une os valores do array colocando um '->' entre eles
    }

    peek() {
        if (this.isEmpty) {
            return null
        } else {
            return this.front.value // retorna o valor do primeiro objeto da fila
        }
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); 
queue.dequeue()
queue.print()
queue.peek()