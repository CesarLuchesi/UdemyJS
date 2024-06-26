//For clássico - Geralmente com iteráveis (array ou strings)
//for in - Retorna o indice ou chave (string, array ou objetos)
//For of - retorna o valor em si (iteráveis, arrays ou strings)

const names = 'Enzo Otavio'

const nomes = ['cesar', 'barbara', 'caio']

for (let i; i < names.length; i++) {
  console.log(names[i])
}

// for (let i in names) {
//   console.log(names[i])
// }

// for (let valor of names) {
//   console.log(valor)
// }

nomes.forEach(function (value, index, array) {
  console.log(value, index, array)
})
