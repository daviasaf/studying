import {drizzle} from 'drizzle-orm/mysql2'
import * as mysql from 'mysql2'

const connectionPool = mysql.createPool({
    uri:process.env.DB_URL
})

export const db = drizzle(connectionPool)