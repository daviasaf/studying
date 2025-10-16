import { db } from "~~/server/database/database";
import { hero, newHero } from "~~/server/database/schemas/schema";
import { eq } from "drizzle-orm";

// erro no put
export default defineEventHandler(async(event)=>{
    console.log("oi")
    const {nome,classe,nivel} = await readBody(event)
    const idString = getRouterParam(event, 'id')
    const heroiAtualizado: newHero = {
        nome: nome,
        classe: classe,
        nivel: Number(nivel)
    }

    //                                          faz uma verificacao dps pra esse number
    await db.update(hero).set(heroiAtualizado).where(eq(hero.id, Number(idString)))
    return{
        msg:'Heroi atualizado com sucesso!',
        heroiAtualizado: heroiAtualizado
    }

})