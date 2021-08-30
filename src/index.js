import express from 'express'
import './config/mongoose'
import { PORT } from './config'
import cors from 'cors';

//importing routers
import productRouter from './routes/products.routes'
import authRouter from './routes/auth.routes'

const app = express()

app.use(cors());
app.use(express.json());

app.use('/products', productRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})