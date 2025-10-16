import { int, varchar, serial, mysqlTable } from 'drizzle-orm/mysql-core'

export const heroesTable = mysqlTable('heroes_table', {
    id: serial().primaryKey(),
    nome:varchar({length:255}).notNull(),
    idade:int().notNull()
})

export type newHero = typeof heroesTable.$inferInsert