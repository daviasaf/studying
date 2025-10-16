import { db } from "~~/server/database/database";
import { hero, newHero } from "~~/server/database/schemas/schema";

export default defineEventHandler(async(event)=>{
    const {nome, classe, nivel} = await readBody(event)
    if(!nome || !classe || !nivel || isNaN(Number(nivel))){
        throw createError({
            statusCode:404,
            message:'Dados inválidos' 
        })
    }
    const heroi: newHero = {
        nome:nome,
        classe: classe,
        nivel: Number(nivel)
    }
    await db.insert(hero).values(heroi)
    return {
      mensagem: "Herói criado com sucesso!",
      heroiCriado: heroi,
    };
})