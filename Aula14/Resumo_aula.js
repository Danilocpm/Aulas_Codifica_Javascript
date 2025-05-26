// Listas
// Classes e objetos são muito semelhantes, mas uma classe determina as regras que um objeto ira seguir
// Classe logo é a definição de um objeto | Tipo uma receita de bolo

class Node { // declarando classe
    constructor(valor) { // declarando um construtor que declara o "necessario" para um objeto
        this.valor = valor
        this.proximo = null
    }

}

// Lista simples encadeada, importante dizer que ao contrario de array ela se aloca dinamicamente
// O campo proximo do class node simula a ideia que um elemento da lista sempre indica o proximo
class SimpleLynkedList {
    constructor() {
        this.head = null
    }

    inserirInicio(v){
        let novo = new Node(v)
        novo.proximo = this.head // head se refere ao inicio da lista | Faz o proximo valor da lista ser o atual head
        this.head = novo // o valor novo se torna o novo head
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

const lista = new SimpleLynkedList // criando um objeto da classe

lista.inserirInicio(10) // chamando a função pela classe
lista.inserirInicio(20)
lista.inserirInicio(30)
lista.inserirInicio(40)

lista.imprimir()