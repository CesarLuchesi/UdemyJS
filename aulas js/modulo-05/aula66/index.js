//map

//dsobre os números

const numeros = [5,50,80,1,2,3,4,8,7,11,15,22,27,10]


const num10 = numeros.map((numero) => numero*2)

console.log(num10)


//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome do objeto"
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome:'Luiz', idade: 62 },
    {nome:'Maria', idade:23 },
    {nome:'Eduardo', idade:55 },
    {nome:'Leticia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade:47 },
]

const nomes = pessoas.map((obj) => obj.nome)

const idade = pessoas.map((obj) => ({idade: obj.idade}))

const id = pessoas.map(function(obj, indice ){
    const newObj = { ...obj}
    newObj.id = indice + 1
    return newObj
})

// console.log(pessoas)
console.log(id)