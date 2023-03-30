const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia)
// const data = new Date('2019-04-20 20:59')
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1)
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('min', data.getMinutes())
// console.log('seg', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay())
// console.log(data.toString())

function zeroHour(num){
return num >= 10 ? num : `0${num}`
}

function formateDate(Data) {
  const dia = zeroHour(data.getDate())
  const mes = zeroHour(data.getMonth() + 1)
  const ano = zeroHour(data.getFullYear())
  const hora = zeroHour(data.getHours())
  const min = zeroHour(data.getMinutes())
  const seg = zeroHour(data.getSeconds())

  return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formateDate(data)
console.log(dataBrasil)
