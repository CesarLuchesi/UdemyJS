function randomNum(min = 0,max = 3){
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

async function exec() {
    try {
        const fase1 = await wait('Fase 1' , randomNum())
        console.log(fase1)
        const fase2 = await wait('Fase 2' , randomNum())
        console.log(fase2)
        const fase3 = await wait(3 , randomNum())
        console.log(fase3)  
    } catch (error) {
        console.log(error)
    }
}

exec()

// wait('Fase 1' , randomNum())
// .then( result => {
//     console.log(result)
//     return wait('fase 2', randomNum())
// })
// .then(fase => {
//     console.log(fase)
//     return wait('Fase 3', randomNum())
// })
// .then(fase =>{
//     console.log(fase)
// })
// .catch(e => console.log(e))