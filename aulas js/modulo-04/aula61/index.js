function* generator1() {

    yield 'valor1'

    yield 'valor2'

    yield 'valor3'
}

const g1 = generator1()
for (let valor of g1){
    // console.log(valor)
}

function* generator2() {
    let i = 0
     
    while(true){
        yield i++
    }
}


function* generator3(){
    yield 0
    yield 1
    yield 2
}

function* generator4(){
    yield* generator3()
    yield 3
    yield 4
    yield 5
}

const g4 = generator4()

for(let valor of g4){
    console.log(valor)
}

function* generator5(){
    yield function(){
        console.log('vim do y1')
    }

    yield function(){
        console.log('vim do y2')
    }
    return function(){
        console.log('vim do return')
    }

}

const g5 = generator5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value

func1()
func2()
func3()
