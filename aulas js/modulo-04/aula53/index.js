//closure

function creatFunction(){
    const nome = 'Cesar'
    return function(){
        return nome
    }
}

const func = creatFunction()
console.log(func)