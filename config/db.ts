import mongoose from 'mongoose'
import config from 'config'

async function connect() {
    const dbUri = config.get<string>('dbUri')
    try {
        await mongoose.connect(dbUri, () => {
            console.log('conectado ao mongoDB')
        })
    } catch (error) {
        console.log("Não foi possivel conectar", error)
    }
}

export default connect