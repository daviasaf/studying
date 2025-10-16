import 'dotenv/config'

export default {
    out:'./drizzle',
    dialect:'mysql',
    schema:'./src/db/schema.ts',
    dbCredentials:{
        url: process.env.DB_URL
    }
}