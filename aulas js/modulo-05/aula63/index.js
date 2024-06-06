//

const nomes = ['Maria', 'Joao','Eduardo', 'Gabriel', 'Julia']




// .splice(indice, delete, elem1, elem2 ...)
// const removidos = nomes.splice(3,2, 'Luiz', 'otavio')]

//shift
// const removidos = nomes.splice(0,1)

//push
// nomes.splice(nomes.length, 0 , 'Luiz')

//unshift
nomes.splice(0,0,'Cesar')

console.log(nomes)   