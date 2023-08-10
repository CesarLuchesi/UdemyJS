//desclaração de função (Function hoisting)
falaOi()
function falaOi() {
  console.log('Oie')
}
falaOi()

//First-class objects
// Function expression
const souUmDado = () => {
  console.log('sou um dado.')
}
souUmDado()

function executaFuncao(func) {
  func()
}

executaFuncao(souUmDado)

//Arrow function

const arrowFunction = () => {
  console.log('Sou uma arrow function')
}
arrowFunction()

//Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando')
  }
}
obj.falar()
