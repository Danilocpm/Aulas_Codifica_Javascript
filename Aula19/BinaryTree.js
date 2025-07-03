// Propriedades da arvore com as seguintes mudancas
// Todo no pode apenas ter 0 ou 2 filhos
// Elementos menores ficam a esquerda

class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null 
    }

    insert(value) {
        let newNode = new Node(value)

        if(this.root == null) {
            this.root = newNode
            return
        }

        this.insertNode(this.root, newNode)
    }

    insertNode(currentNode, newNode) {
        if(newNode.value < currentNode.value) {

            if(currentNode.left == null) {
                currentNode.left = newNode
            }

            else {
                this.insertNode(currentNode.left, newNode)
            }


        } 
        
        else {

            if(currentNode.right == null) {
                currentNode.right = newNode
            }

            else {
                this.insertNode(currentNode.right, newNode)
            }

        }
    }

    inOrderTraversal(node = this.root){
        if(node !== null) {
            this.inOrderTraversal(node.left)

            console.log(node.value)

            this.inOrderTraversal(node.right)

        }
    }

    search(value, node = this.root){
        if(value === null) return false

        if(value === node.value) return true

        if(value < node.value) return this.search(value, node.left)
        else return this.search(value, node.right)
    }
}

const tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
tree.insert(11)
tree.insert(8)
tree.insert(13)
tree.insert(3)
tree.insert(4)
tree.insert(12)

tree.inOrderTraversal()

console.log(tree.search(8))