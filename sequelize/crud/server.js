import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";
const PORT = 8008;
const app = express();

app.use(express.json());
app.use(routes);

async function startServer() {
  try {
    await db.sync();
    console.log(`Bancos de dado conectado: ${process.env.DATABASE_NAME}`);
    app.listen(PORT,() =>
      console.log(`Servidor rodando na porta http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
}
startServer();
