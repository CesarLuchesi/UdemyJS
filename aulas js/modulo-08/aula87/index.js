function randomNum(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if( typeof msg !== 'string'){
            reject(new Error('Error'))
            return
        } 

        setTimeout(() => {
            resolve(msg)
        },time)
    })
}

//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    'valor 1',
    wait('Promise 1', 3000),
    wait('Promise 2', 1000),
    wait('Promise 3', 1000),
    // wait(111, 1000),
    'outro valor'
]

Promise.all(promises)
.then( value =>{
    console.log(value)
})
.catch(erro => {
    console.log(erro)
})

// function downloadPage() {
//     const cache = true
//     if(cache){
//         return Promise.reject('Página em cache')
//     }else {
//         return wait('Baixei', 3000)
//     }
// }

// downloadPage()
// .then(dadosPagina => {
//     console.log(dadosPagina)
// })
// .catch(e => ('error', e))

