import { mysqlTable, serial, int, varchar } from 'drizzle-orm/mysql-core'

export const userTable = mysqlTable('tabela_usuarios',{
    id: serial().primaryKey(),
    nome: varchar({length:255}).notNull(),
    idade: int().notNull()
})