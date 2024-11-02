import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Cesar',
      sobrenome: 'Luchesi',
      email: "cesar@gmail.com",
      idade: 26,
      peso: 86,
      altura: 1.80,
    })
    res.json(novoAluno);
  }
}

export default new HomeController();
