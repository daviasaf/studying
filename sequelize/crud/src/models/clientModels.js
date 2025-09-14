import { Sequelize, DataTypes } from "sequelize";
import db from "../db.js";


// Podemos colocar o nome da tabela no singular
// O próprio sequelize irá pluralizar o nome na tabela
//                          ⬇
export default db.define("client", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    //  ⬇ Se tiver um nome igual a esse, dará erro por causa dessa opção
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
