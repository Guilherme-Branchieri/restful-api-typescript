const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
export default {
    port: 3333,
    dbUri: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.8temdef.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development'
}