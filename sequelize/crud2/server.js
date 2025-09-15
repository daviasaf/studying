import express from "express"
import db from "./src/db.js"
import router from "./router.js"
const app = express()
const PORT = 8008

app.use(express.json())
app.use(router)

async function startServer() {
    try {
        await db.sync()
        console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`)
        app.listen(PORT,()=>console.log(`Servidor rodando na porta http://localhost:${PORT}`))
    } catch (error) {
       console.log("Erro ao seu conectar") 
    }
}
startServer();