import dotenv from "dotenv";
dotenv.config();
import "./src//models/database";
import express from "express";
import home from "./src/routes/home";
import user from "./src/routes/user";
import tokens from "./src/routes/token";
import Aluno from "./src/routes/aluno";
import photos from "./src/routes/photos";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", home);
    this.app.use("/users", user);
    this.app.use("/tokens/", tokens);
    this.app.use("/alunos/", Aluno);
    this.app.use("/photos/", photos);
  }
}

export default new App().app;
