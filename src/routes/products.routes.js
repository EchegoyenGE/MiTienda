import { Router } from "express";
const router = Router()

import {
    getProducts,
    getProduct,
    updateProducts,
    createProduct,
    deleteProducts
} from '../controllers/product.controller'

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.put('/:id', updateProducts)

router.delete('/:id', deleteProducts)

export default router