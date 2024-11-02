import User from "../models/Users";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado"],
        });
      }
      const users = await User.findByPk(req.params.id);

      if (!users) {
        return res.status(400).json({
          errors: ["Usuario não existe"],
        });
      }
      const newData = await users.update(req.body)
      return res.json(newData);
    } catch (e) {
      return res
      .status(400)
      .json({ errors: e.errors.map((err) => err.message) });
    }
  }


  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado"],
        });
      }
      const users = await User.findByPk(req.params.id);

      if (!users) {
        return res.status(400).json({
          errors: ["Usuario não existe"],
        });
      }
      await users.destroy()
      return res.json(null);
    } catch (e) {
      return res
      .status(400)
      .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
