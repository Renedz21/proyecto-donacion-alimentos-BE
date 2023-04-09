import express from 'express'
import { createFoodType, deleteFoodType, getFoodTypeById, getFoodTypes, updateFoodType } from '../controllers/foodType.controller'

const router = express.Router()

router.get('/', getFoodTypes)
router.get('/:id', getFoodTypeById)
router.post('/', createFoodType)
router.put('/:id', updateFoodType)
router.delete('/:id', deleteFoodType)

export default router