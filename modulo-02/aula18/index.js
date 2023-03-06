const pessoa1 = {
  nome: "Cesar",
  sobrenome: "Luchesi",
  idade: 25
};

const creatPeople = (nome, sobrenome, idade) =>{
  return{
    nome,
    sobrenome,
    idade
  }
}

const pessoa2 = creatPeople('Cesar', "Luchesi", 25)
console.log(pessoa2)

