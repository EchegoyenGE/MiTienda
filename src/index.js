import express from 'express'
import './config/mongoose'
import { PORT } from './config'

import productRouter from './routes/products.routes'

const app = express()

app.use(express.json());

app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})