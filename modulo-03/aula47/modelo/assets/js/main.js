let cronometro
let segundos = 0
let minutos = 0
let horas = 0

function init() {
  cronometro = setInterval(function () {
    segundos++

    if (segundos === 60) {
      segundos = 0
      minutos++
    }

    if (minutos === 60) {
      minutos = 0
      horas++
    }

    updateStopWatch()
  }, 1000)
}

function pause() {
  clearInterval(cronometro)
  let element = document.getElementById('cronometro')
  element.className = 'redText'
}

function reset() {
  clearInterval(cronometro)
  segundos = 0
  minutos = 0
  horas = 0
  updateStopWatch()
  let element = document.getElementById('cronometro')
  element.className = 'normalText'
}

function updateStopWatch() {
  let cronometroElemento = document.getElementById('cronometro')
  cronometroElemento.textContent =
    formatTime(horas) + ':' + formatTime(minutos) + ':' + formatTime(segundos)
}

function formatTime(tempo) {
  return tempo < 10 ? '0' + tempo : tempo
}
