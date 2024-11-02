require("dotenv").config();

module.exports = {
  dialect: "mariadb",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
  dialectOptions: {
    timeZone: "America/Sao_paulo",
  },
  timeZone: "America/Sao_paulo",
};
