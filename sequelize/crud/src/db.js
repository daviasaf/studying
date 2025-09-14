import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js"; // importa dotenv para configurar variaveis de ambiente

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbHost = process.env.DATABASE_HOST;
const dbPassword = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql", //Tipo de banco de dados
  host: dbHost,
});

export default sequelize;
