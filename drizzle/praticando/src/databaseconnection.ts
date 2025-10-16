import 'dotenv/config'
import {drizzle, MySql2Database} from 'drizzle-orm/mysql2'
import * as mysql from 'mysql2'

const poolConection = mysql.createPool({
    uri:process.env.DB_URL!
})

export const db:MySql2Database = drizzle(poolConection)

