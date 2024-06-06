
//revisão objetos

const produto = { nome: 'caneca', preco: 1.8}

for(let [chave,valor] of Object.entries(produto)){
    console.log(chave, valor)
}