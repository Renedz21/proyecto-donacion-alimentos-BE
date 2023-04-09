import { Request, Response } from 'express'
import FoodType from '../models/foodType.schema'
import { createError } from '../utils/createError'
import { uploadImage } from '../utils/uploadImage'


export const getFoodTypes = async (_req: Request, res: Response, next: any) => {
    try {
        const foodTypes = await FoodType.find();
        res.status(200).json(foodTypes)
    } catch (error) {
        next(createError('', 500))
    }
}

export const getFoodTypeById = async (req: Request, res: Response, next: any) => {

    const { id } = req.params
    try {
        const foodType = await FoodType.findById(id)
        if (!foodType) {
            next(createError('Food type not found', 404))
        }
        res.status(200).json(foodType)
    } catch (error) {
        next(createError(' Food not ', 500))
    }
}

export const createFoodType = async (req: Request, res: Response, next: any) => {
    try {

        const { name, description, photoUrl } = req.body

        const photoURL = await uploadImage(photoUrl, 'food-type')

        const foodType = await FoodType.create({
            name,
            description,
            photoUrl: photoURL
        })

        res.status(201).json(foodType)

    } catch (error) {
        next(createError('', 500))
    }
}

export const updateFoodType = async (req: Request, res: Response, next: any) => {

    const { id } = req.params

    try {

        const { name, description, photoUrl } = req.body

        const photoURL = await uploadImage(photoUrl, 'food-type')

        const foodType = await FoodType.findByIdAndUpdate(id, {
            $set: {
                name,
                description,
                photoUrl: photoURL
            }
        }, { new: true })

        res.status(201).json(foodType)

    } catch (error) {
        next(createError('', 500))
    }
}

export const deleteFoodType = async (req: Request, res: Response, next: any) => {
    try {

        const { id } = req.params

        const foodType = await FoodType.findByIdAndDelete(id)

        res.status(201).json(foodType)

    } catch (error) {
        next(createError('', 500))
    }
}

