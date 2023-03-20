function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault()
    const nome = form.querySelector('.inputName')
    const sobrenome = form.querySelector('.inputSobrenome')
    const peso = form.querySelector('.inputPeso')
    const altura = form.querySelector('.inputAltura')

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })
    console.log(pessoas)

    resultado.innerHTML +=
      `<p>${nome.value} ${sobrenome.value}` + `${peso.value}${altura.value}</p>`
  }

  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()
