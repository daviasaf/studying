import { mysqlTable, int, varchar,serial } from "drizzle-orm/mysql-core";
export const hero = mysqlTable('heroes_table',{
    id:serial().primaryKey(),
    nome:varchar({length:255}).notNull(),
    classe:varchar({length:255}).notNull(),
    nivel: int().notNull()
})

export type newHero = typeof hero.$inferInsert