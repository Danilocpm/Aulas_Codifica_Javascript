class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
        this.anterior = null
    }
}

// Diferentemente da encadeada a duplamente encadeada inidica o proximo elemento e o anterior também
class DoubleLynkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    inserirInicio(v){
        let novo = new Node(v)
        novo.proximo = this.head
        if(this.head) this.head.anterior = novo // insere no head atual o anterior a ele logo o novo objeto
        else this.tail = novo // se já nao possuir um head quer dizer que a lista e vazia ent o head = tail no objeto novo
        this.head = novo
        this.length++
    }

    inserirEM(index, valor){

        if((index < 0) || (index > this.length)){
            throw new RangeError("Fora dos padrões da lista") // throw deve ser explicado depois
        } else if(index === 0) { // seria o inicio da lista
            return this.inserirInicio(valor)
        } else if(index === this.length) { // seria o final da lista
            return this.inserirFinal(valor)
        }

        let atual = this.head // declaro um ponteiro no atual 

        for(let i = 0; i < index; i++) { // faço esse ponteiro ir ate o indice informado
            atual = atual.proximo

        }

        let novo = new Node(valor) // crio um objeto novo
        let NoAnterior = atual.anterior // crio uma variavel com o valor do objeto anterior ao meu ponteiro

        NoAnterior.proximo = novo // defino o proximo do no anterior do meu ponteiro o novo objeto
        novo.anterior = NoAnterior // o novo objeto recebe como anterior o no anterior
        novo.proximo = atual // o novo objeto recebe o atual como proximo
        atual.anterior = novo // o atual recebe o novo objeto como o seu anterior

        // dessa forma ele é inserido no meio da lista porque o objeto por exemplo 1 aponta para o novo 2
        // e o antigo objeto 2 que agr será o 3 deve apontar para o novo 2

        this.length++


        }

    removerEM(indice) {
    if (indice < 0 || indice >= this.length) {
        throw new RangeError("Índice inválido")
    }

    let removido

    if (indice === 0) { // Remover do início
        removido = this.head
        this.head = this.head.proximo
        if (this.head) {
            this.head.anterior = null
        } else {
            this.tail = null // Lista ficou vazia
        }

    } else if (indice === this.length - 1) { // Remover do final
        removido = this.tail
        this.tail = this.tail.anterior
        if (this.tail) {
            this.tail.proximo = null
        } else {
            this.head = null
        }

    } else { // Remover do meio
        let atual = this.head
        for (let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        removido = atual
        let NoAnterior = atual.anterior
        let NoPosterior = atual.proximo

        NoAnterior.proximo = NoPosterior
        NoPosterior.anterior = NoAnterior
    }
        this.length--
    }



    inserirFinal(v){
        let novo = new Node(v)
        if(!this.tail) { // se não possuir tail a lista ta vazia ent o tail = head
            this.tail = novo
            this.head = novo
        } else { 
            this.tail.proximo = novo // o proximo elemento da lista e o objeto atual
            novo.anterior = this.tail // o objeto anterior ao novo é o fim atual da lista
            this.tail = novo // nomeia o novo fim da lista
        }
        this.length++

    }

    imprimir(){
        let atual = this.head
        let str = ""
        while(atual) { // Enquanto valor existir ele sera verdadeiro
            str += atual.valor + " ---> "
            atual = atual.proximo // Traz o proximo valor para o while
        }

        str += 'null'
        console.log(str)
    }
    imprimirR(){
        let atual = this.tail
        let str = ""
        while(atual) {
            str += atual.valor + " ---> "
            atual = atual.anterior
        }

        str += "null"
        console.log(str)
    }
}

const lista = new DoubleLynkedList // criando um objeto da classe

lista.inserirInicio(10) // chamando a função pela classe
lista.inserirInicio(20)
lista.inserirInicio(30)
lista.inserirFinal(40)
lista.inserirEM(3,50)
lista.removerEM(2)

lista.imprimir()
lista.imprimirR()