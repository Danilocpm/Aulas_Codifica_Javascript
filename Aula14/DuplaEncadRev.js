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
    }

    inserirInicio(v){
        let novo = new Node(v)
        novo.proximo = this.head
        if(this.head) this.head.anterior = novo // insere no head atual o anterior a ele logo o novo objeto
        else this.tail = novo // se já nao possuir um head quer dizer que a lista e vazia ent o head = tail no objeto novo
        this.head = novo
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

lista.imprimir()
lista.imprimirR()