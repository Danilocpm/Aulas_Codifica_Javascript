const categorias = [{
    id: 1,
    nome: "eletronicos",
    filhos: [
        {id:2, nome: "celulares", filhos: []},
        {id:3, nome: "computadores", filhos: [
            {id:4, nome: "notebook", filhos: []}
        ]},
    ]
},
{
    id:5,
    nome: "roupas",
    filhos: []
}]

function imprimirCat(lista, nivel = 0) {
    for(let categoria of lista) {
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length > 0) {
            imprimirCat(categoria.filhos, nivel + 1)
        }
    }

}

imprimirCat(categorias)