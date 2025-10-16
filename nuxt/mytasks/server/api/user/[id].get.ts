import { eq } from "drizzle-orm";
import { db } from "~~/server/database/database";
import { heroesTable } from "~~/server/database/schemas/schema";

export default defineEventHandler(async (event)=> {
    const idString = await getRouterParam(event, 'id')
    if(!idString || isNaN(Number(idString))){
        throw createError({
            statusCode:400,
            statusMessage:'ID do herói inválido ou ausente'
        })
    }
    const id = Number(idString)
    const user = await db.select().from(heroesTable).where(eq(heroesTable.id, Number(id)))
    return{
        heroe:user[0] || null
    }
})