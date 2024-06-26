const path = require('path')
const filePath = path.resolve(__dirname, 'teste.json');
const write = require('./modules/write')
const read = require('./modules/read')

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Maria'},
// ]

// const json = JSON.stringify(pessoas, '', 2)
// write(filePath, json)


async function readFile(paths){
 const data = await read(paths)
 renderData(data)
}

function renderData(data){
    data = JSON.parse(data)
    data.forEach(val => {
        console.log(val)
    });
}
readFile(filePath)