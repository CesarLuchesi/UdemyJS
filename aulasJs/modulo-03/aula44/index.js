function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números')
  }
  return x + y
}

try {
  console.log(sum(2, 'a'))
  console.log(sum(2, 1))
} catch (error) {
  console.log(error)
  console.log('Digite um valor válido')
}
