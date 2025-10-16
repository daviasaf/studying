import { db } from "~~/server/database/database"
import { heroesTable } from "~~/server/database/schemas/schema"

export default defineEventHandler(async ()=>{
     const users = await db.select().from(heroesTable)
    return{
        registeredHeroes:users
    }
})