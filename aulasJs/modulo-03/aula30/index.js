function allData() {
  const data = new Date()
  const week = data.getDay()
  const month = data.getMonth()
  let dayOfTheWeek
  let montOfTheYear

  switch (week) {
    case 0:
      dayOfTheWeek = 'Domingo'
      break
    case 1:
      dayOfTheWeek = 'Segunda-Feira'
      break
    case 2:
      dayOfTheWeek = 'Terça-Feira'
      break
    case 3:
      dayOfTheWeek = 'Quarta-Feira'
      break
    case 4:
      dayOfTheWeek = 'Quinta-Feira'
      break
    case 5:
      dayOfTheWeek = 'Sexta-Feira'
      break
    case 6:
      dayOfTheWeek = 'Sexta-Feira'
      break
    default:
      dayOfTheWeek = 'Não existe'
      break
  }

  switch (month) {
    case 0:
      montOfTheYear = 'Janeiro'
      break
    case 1:
      montOfTheYear = 'Fevereiro'
      break
    case 2:
      montOfTheYear = 'Março'
      break
    case 3:
      montOfTheYear = 'Abril'
      break
    case 4:
      montOfTheYear = 'Maio'
      break
    case 5:
      montOfTheYear = 'Junho'
      break
    case 6:
      montOfTheYear = 'Julho'
      break
    case 7:
      montOfTheYear = 'Agosto'
      break
    case 8:
      montOfTheYear = 'Setembro'
      break
    case 9:
      montOfTheYear = 'Outubro'
      break
    case 10:
      montOfTheYear = 'Novembro'
      break
    case 11:
      montOfTheYear = 'Dezembro'
      break
    default:
      montOfTheYear = 'Não existe'
      break
  }

  const dayWeek = data.getDate()
  const year = data.getFullYear()
  const hour = data.getHours()
  const min = data.getMinutes()

  const h1 = document.querySelector('.container h1')
  h1.innerHTML = `${dayOfTheWeek}, ${dayWeek} de ${montOfTheYear} de ${year} \n ${hour}:${min}`

  return console.log(
    `${dayOfTheWeek}, ${dayWeek} de ${montOfTheYear} de ${year} \n ${hour}:${min}`
  )
}
allData()
