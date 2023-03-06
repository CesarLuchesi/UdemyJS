/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.80m de altura e seu IMC é de 25.92
Luiz Otávio nasceu em 1993
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const altura = 1.8
let imc
imc = peso / Math.pow(altura, 2)

const date = new Date()
const currentYear = date.getFullYear()
let anoNascimento
anoNascimento = currentYear - idade

console.log(
  `${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg, tem ${altura}m de altura e seu IMC é de: ${imc}, e nasceu em: ${anoNascimento}.`
)
