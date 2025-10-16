import { userTable } from './db/schema.js'
import { db } from './databaseconnection.js'
import { eq } from 'drizzle-orm'


async function main(){
    // const user: typeof userTable.$inferInsert={
    //     nome:'Paula',
    //     idade:18
    // }
    // await db.insert(userTable).values(user)
    // console.log('Usuário adicinado')
    // const users = await db.select().from(userTable)
    // console.log('Todos usuários: ', users)
    const users = await db.select().from(userTable).where(eq(userTable.idade, 19))
    console.log(users)
}
main()