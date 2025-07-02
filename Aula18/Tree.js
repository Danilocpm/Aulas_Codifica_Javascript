class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value)
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)
    }

    traverseDFS(callback) { // insere uma funcao para rodar no callback
        function recurse(node) { // funcao recursiva chamada com o root em node
            callback(node) // chama a funcao inserida no inicio 
            node.children.forEach(child => recurse(child)) // chama a funcao dnv para cada crianca encontrada no meio de uma crianca do root
                
            }
        recurse(this.root) // chama a funcao recursiva
    }


}

// Raiz
const tree = new Tree('A')

// Nos
const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')
const G = new TreeNode('G')
const H = new TreeNode('H')

// Adicionando filhos

tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

// Filhos dos filhos
B.addChild(E)
B.addChild(F)
C.addChild(G)
F.addChild(H)

function printNode(node) {
    console.log(node.value)
}

tree.traverseDFS(printNode)