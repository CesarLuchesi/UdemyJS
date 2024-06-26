const number = Number(prompt('Digite um número'))
const numberTitle = document.getElementById('number-entry')
const text = document.getElementById('text')

numberTitle.innerHTML = number;
text.innerHTML += `<p> Raiz quadra é: ${number ** 0.5}. </p>`;
text.innerHTML += `<p> ${number} é inteiro: ${Number.isInteger(number)} </p>`;
text.innerHTML += `<p> É  NaN: ${Number.isNaN(number)} </p>`;
text.innerHTML += `<p> Arredondado para baixo: ${Math.floor(number)} </p>`;
text.innerHTML += `<p> Arredondado para cima:  ${Math.ceil(number)} </p>`;
text.innerHTML += `<p> Com duas casas decimais:  ${number.toFixed(2)}</p>`;
