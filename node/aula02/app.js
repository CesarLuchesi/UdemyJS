const multiplicacao = require('./mod')

console.log(multiplicacao(2, 2))

console.log(__filename)
console.log(__dirname)

const path = require('path')
console.log(path.resolve(__dirname, '..','..'))
