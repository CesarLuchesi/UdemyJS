const falar = {
    falar () {
        console.log(`${this.nome} está falando`)
    },
}

const comer = {
    comer () {
        console.log(`${this.nome} está comendo`)
    },
}

const beber = {
    beber () {
        console.log(`${this.nome} está bebendo`)
    }
}

function criaPessoa(nome, sobrenome){

    const pessoPrototype = {...falar,...comer,...beber}

    return Object.create(pessoPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Luiz', 'Otavio')
console.log(p1.beber())