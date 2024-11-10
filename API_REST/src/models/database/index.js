import Sequelize from "sequelize";
import databaseConfig from "../../config/database";
import Aluno from "../Aluno";
import Users from "../Users";
import Photo from "../Photo";

const models = [Aluno, Users, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
