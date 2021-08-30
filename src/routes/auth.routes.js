import { Router } from "express";
const router = Router()

//importing controller
import { login, register, profile } from '../controllers/auth.controller'

//importing middlewares
import { verifyToken } from '../middlewares/auth.middleware'

router.post('/login', login)
router.post('/register', register)
router.get('/profile', verifyToken, profile)


export default router