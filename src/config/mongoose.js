import { connect, connection } from 'mongoose'
import { MONGODB_URL } from '../config'

(async () => {
    const db = await connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    console.log('Database connected to:', db.connection.name)
})();

connection.on('connected', () => {
    console.log('Mongodb is connected')
})

connection.on('error', (error) => {
    console.log(error)
})

connection.on('disconnected', () => {
    console.log('Mongodb is disconnected')
})

process.on('SIGINT', () => {
    connection.close(() => {
        console.log('Mongodb connection closed')
        process.exit(0)
    })
})
