function Produto(nome,preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number') {
                throw new TypeError('Valor errado')
            }
            estoquePrivado = valor
        }
    })
}


function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor
        }
    }
}


const p2 = criaProduto('Camiseta')
console.log(p2.nome)
