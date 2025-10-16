import 'dotenv/config'

export default {
    out:'server/database/migrations',
    schema:'server/database/schemas',
    dialect:'mysql',
    dbCredentials:{
        url:process.env.DB_URL
    }
}