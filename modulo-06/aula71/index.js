//defineProperty - defineProperties]

function Produto(nome,preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false,
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false,
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)