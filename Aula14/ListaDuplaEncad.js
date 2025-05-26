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
    }

    inserirInicio(v){
        let novo = new Node(v)
        novo.proximo = this.head
        if(this.head) this.head.anterior = novo // Porque o novo item vem antes do atual na lista
        this.head = novo
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
}

const lista = new DoubleLynkedList // criando um objeto da classe

lista.inserirInicio(10) // chamando a função pela classe
lista.inserirInicio(20)
lista.inserirInicio(30)
lista.inserirInicio(40)

lista.imprimir()