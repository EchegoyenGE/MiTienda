import express from 'express'
import './config/mongoose'
import { PORT } from './config'
import cors from 'cors';

import productRouter from './routes/products.routes'

const app = express()

app.use(cors());
app.use(express.json());

app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})