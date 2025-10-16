import * as mysql from 'mysql2/promise'
import {drizzle} from 'drizzle-orm/mysql2'

const conectionPool = mysql.createPool({
    uri:process.env.DB_URL!
})

export const db = drizzle(conectionPool)