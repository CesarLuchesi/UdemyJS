import Sequelize from "sequelize";
import databaseConfig from "../../config/database";
import Aluno from "../Aluno";
import Users from "../Users";

const models = [Aluno, Users];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
