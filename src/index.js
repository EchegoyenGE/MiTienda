import express from 'express'
import './config/mongoose'

import productRouter from './routes/products.routes'

const app = express()

app.use(express.json());

app.use('/products', productRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})