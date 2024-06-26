//Escreva uma fuinção que recebe um número e retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número não é divisivel por 3 e 5 = Retorna próprio número
//Checar se realmente é um numero
//Usar um Laço para verificar números de 0 a 100

const receiveNum = num => {
  if (isNaN(num)) {
    return 'Numero inválido'
  }

  if (num % 5 === 0 && num % 3 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return `${num} não é divisivel por 3 e 5 `
  }
}

const checkRange = num => {
  for (num = 0; num <= 100; num++) {
    console.log(`${num}, ${receiveNum(num)}`)
  }
}

checkRange()
