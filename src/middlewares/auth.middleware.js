import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config'

export const verifyToken = (req, res, next) => {

    const token = req.headers.authorization

    if (!token) return res.status(401).send({ message: 'Unauthorized' })

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET)

        const user = {
            _id: decodedToken.id
        }

        req.user = user

        next()
    } catch (error) {
        res.status(401).send({ message: 'Unauthorized' })
    }
}