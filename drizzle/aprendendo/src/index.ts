import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import { eq } from "drizzle-orm";
import { usersTable } from "./db/schema.js";


const db = drizzle({connection: process.env.DB_URL!,casing:'snake_case'});

async function main(){
      const user: typeof usersTable.$inferInsert = {
        // funciona de acordo com o schema
        name:'Asaf',
        age:17,
    }

    await db.insert(usersTable).values(user)
    console.log('New user created!')

    const users = await db.select().from(usersTable)
    console.log('Getting all users from the database: ', users)


    await db.
    update(usersTable)
    .set({age:18})
    // faz uma comparação entre os 2
    .where(eq(usersTable.name, user.name))
    console.log('User info update')

    await db.delete(usersTable).where(eq(usersTable.name, user.name))
    console.log('User delected')
}

main()