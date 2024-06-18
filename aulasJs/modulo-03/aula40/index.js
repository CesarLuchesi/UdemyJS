const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//continue - continua para próxima iteração
//Break - sai do laço

let i = 0
while (i < numeros.length) {
  let numero = numeros[i]
  if (numero === 2) {
    console.log('Pulando 2')
    i++
    continue
  }
  console.log(numero)

  if (numero === 7) {
    console.log('7 encontrado')
    i++
    break
  }
  i++
}
