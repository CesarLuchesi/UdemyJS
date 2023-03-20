const form = document.getElementById('.formulario')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)
  
  if (!peso) {
    resultado('Peso Inválido')
    return
  }
})



function criaP() {
  const p = document.createElement('p')
  return p
}

function resultado(msg) {
  const resultado = document.getElementById('.resultado')
  resultado.innerHTML = ''
  const p = criaP()
}
