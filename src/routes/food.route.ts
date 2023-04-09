import express from 'express'
import { createFood, deleteFood, getFood, getFoodById, updateFood } from '../controllers/food.controller'

const router = express.Router()

router.get('/', getFood)
router.get('/:id', getFoodById)
router.post('/', createFood)
router.put('/:id', updateFood)
router.delete('/:id', deleteFood)

export default router