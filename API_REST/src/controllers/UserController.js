import User from "../models/Users";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      const { id, nome, email } = users;
      return res.json(id, nome, email);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const users = await User.findByPk(req.userId);

      if (!users) {
        return res.status(400).json({
          errors: ["Usuario não existe"],
        });
      }
      const newData = await users.update(req.body);
      const { id, nome, email } = newData;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const users = await User.findByPk(req.userId);

      if (!users) {
        return res.status(400).json({
          errors: ["Usuario não existe"],
        });
      }
      await users.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
