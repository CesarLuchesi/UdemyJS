function randomNum(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if( typeof msg !== 'string') reject(new Error('Error'))
        setTimeout(() => {
            resolve(msg)
        },time)
    })
}

wait('Frase 1', randomNum(1,3))
    .then(response => {
        console.log(response)
        return (wait(2222, randomNum(1,3)))
    })
    .then(response => {
        console.log(response)
    })
    .catch(e =>{
        console.log(e)
    })

