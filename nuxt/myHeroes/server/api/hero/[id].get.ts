import { db } from "~~/server/database/database";
import { hero } from "~~/server/database/schemas/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async(event)=>{
    const idString = getRouterParam(event, "id")
    if(!idString || isNaN(Number(idString))){
        throw createError({
            statusCode:404,
            message:'ID inválido'
        })
    }
    const id = Number(idString)
    const chosenHeroe = await db.select().from(hero).where(eq(hero.id, id))
    return{ heroiEscolhido:chosenHeroe}
})