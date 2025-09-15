import { Sequelize } from "sequelize"
import dotenv from "dotenv/config.js"

// Preenche o sequelize nessa ordem
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.HOST


const sequelize = new Sequelize(dbName,dbUser, dbPassword, {
    dialect:"mysql",
    host:dbHost
})

export default sequelize;