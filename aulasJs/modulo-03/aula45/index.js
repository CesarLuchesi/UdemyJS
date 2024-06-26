function returnHour(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando Instância de Data')
  }
  if (!data) {
    data = new Date()
  }

  return data.toLocaleTimeString('pt-BR', {})
  hour: '2-digit'
  minute: '2-digit'
  second: '2-digit'
  hour12: false
}

try {
  const date = new Date('01-01-1970 12:58:12')
  const hora = returnHour(date)
  console.log(hora)
} catch (err) {
  console.log('Digite uma data válida')
} finally {
  console.log('OK')
}
