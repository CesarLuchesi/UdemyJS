
//construtora -> molde
function Pessoa (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomCompleto = function() {
   return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Cesar', 'Luchesi')
console.log(pessoa1.nomCompleto)

