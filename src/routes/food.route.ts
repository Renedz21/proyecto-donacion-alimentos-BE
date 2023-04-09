import express from 'express'
import { createFood, deleteFood, getFood, getFoodById, updateFood } from '../controllers/food.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken'

const router = express.Router()

router.get('/', getFood)
router.get('/:id', getFoodById)
router.post('/', verifyTokenAndAdmin, createFood)
router.put('/:id', verifyTokenAndAdmin, updateFood)
router.delete('/:id', verifyTokenAndAdmin, deleteFood)

export default router