const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereço: {
    rua: 'Av. Brasil',
    numero: 230
  }
}

const { nome, sobrenome, ...rest } = pessoa
// console.log(nome, sobrenome, idade)
console.log(nome, sobrenome, rest)
