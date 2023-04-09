import express from 'express'
import { createFoodType, deleteFoodType, getFoodTypeById, getFoodTypes, updateFoodType } from '../controllers/foodType.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken'

const router = express.Router()

router.get('/', verifyTokenAndAdmin, getFoodTypes)
router.get('/:id', verifyTokenAndAdmin, getFoodTypeById)
router.post('/', verifyTokenAndAdmin, createFoodType)
router.put('/:id', verifyTokenAndAdmin, updateFoodType)
router.delete('/:id', verifyTokenAndAdmin, deleteFoodType)

export default router