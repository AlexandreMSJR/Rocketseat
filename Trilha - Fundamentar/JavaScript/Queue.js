// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }

    length() {
        const length = this.data.length
        return console.log(`O tamanho da fila é ${length} { ${this.data} }`)
    }
}


// Passo2 2: Utilizando
const fila = new Queue()

fila.enqueue('Alexandre')
fila.enqueue('Pedro')
fila.enqueue('Maicon')
fila.enqueue('Raisa')
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.length()