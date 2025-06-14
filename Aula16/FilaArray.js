function Queue() {
    this.queue = []

    this.enqueue = function(value) {
        this.queue.push(value)
    }

    this.dequeue = function() {
        this.queue.shift()
    }

    this.print = function() {
        console.table(this.queue)
    }

    this.peek = function() {
        console.log(this.queue[0])
    }

}

let Fila = new Queue()

Fila.enqueue(10)
Fila.enqueue(20)
Fila.enqueue(30)
Fila.print()
Fila.dequeue()
Fila.peek()