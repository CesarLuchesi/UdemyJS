function promise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('promise')
            resolve()
        }, 2000)
    })
}

export default async function exec() {
    await promise()
    console.log('end')
}