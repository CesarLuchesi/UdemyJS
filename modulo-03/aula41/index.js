//Escreva uma função que receba 2 números e retorne o maior deles

function myValue() {
  const firstNumber = parseFloat(document.getElementById('firstNumber').value)
  const secondNumber = parseFloat(document.getElementById('secondNumber').value)

  let highestValue = ''

  if (firstNumber < 0 || secondNumber < 0) {
    highestValue = 'Valor inválido'
    alert('Valor inválido')
  } else {
    highestValue =
      firstNumber === secondNumber
        ? 'Valores iguais'
        : `O maior valor é ${
            firstNumber > secondNumber ? firstNumber : secondNumber
          }`
  }

  document.getElementById('highestValueText').innerHTML = highestValue
}
