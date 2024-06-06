//some todos os numeros(reduce)
//retorne um array com os pares (filter)
//retorne um array com o dobro dos valores(map)

const numeros = [5,50,80,1,2,3,4,8,7,11,15,22,27,10]
const total = numeros.reduce(function( acumulador, valor){
    acumulador += valor
    return acumulador
})

console.log(total)


const pessoas = [
    {nome:'Luiz', idade: 62 },
    {nome:'Maria', idade:23 },
    {nome:'Eduardo', idade:55 },
    {nome:'Leticia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade:47 },
]

const maisvelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisvelha)