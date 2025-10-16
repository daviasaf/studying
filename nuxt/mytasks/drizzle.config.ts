import 'dotenv/config'


export default {
    out:'./server/database/migrations',
    dialect:'mysql',
    schema:'./server/database/schemas/schema.ts',
    dbCredentials:{
        url:process.env.DB_URL!
    }
}