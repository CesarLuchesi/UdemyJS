function saudacao(nome){
  return `bom dia, ${nome}`
}
const result = saudacao("cesar")
console.log(result)

function soma(x = 1,y = 1){
  const resultado = x + y
  return resultado
}

console.log(soma(4,2))

const raiz = (n) => {
  return n ** 0.5
}
console.log(raiz(9))