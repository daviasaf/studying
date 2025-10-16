import { db } from "~~/server/database/database";
import { hero } from "~~/server/database/schemas/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event)=>{
    const id = getRouterParam(event,'id')
    await db.delete(hero).where(eq(hero.id, Number(id)))

    return{
        msg:'Herói deletado! com sucesso!'
    }


})