import { Request, Response } from 'express'
import Food from '../models/food.schema'
import { createError } from '../utils/createError'
import { uploadImage } from '../utils/uploadImage'

export const getFood = async (_req: Request, res: Response, next: any) => {
    try {
        const food = await Food.find()
        res.status(200).json(food)
    } catch (error) {
        next(createError('Error al obtener los alimentos', 500))
    }
}

export const getFoodById = async (req: Request, res: Response, next: any) => {
    const { id } = req.params
    try {
        const food = await Food.findById(id)
            .populate('store')
            .populate('beneficOrganization')
            .populate('donation')
            .populate('foodType')

        res.status(200).json(food)
    } catch (error) {
        next(createError(`El producto con el id ${id} no existe`, 500))
    }
}

export const createFood = async (req: Request, res: Response, next: any) => {

    const { name, description, nutritionFacts, expirationDate, quantity, status, photoUrl, storeId, beneficOrganizationId, donationId, foodTypeId } = req.body

    const photoURL = await uploadImage(photoUrl, 'foods')

    try {

        const food = await Food.create({
            name,
            description,
            nutritionFacts,
            expirationDate,
            quantity,
            status,
            photoUrl: photoURL,
            storeId,
            beneficOrganizationId,
            donationId,
            foodTypeId
        })
        res.status(201).json(food)
    } catch (error) {
        next(createError('Error al crear el producto', 500))
    }
}

export const updateFood = async (req: Request, res: Response, next: any) => {

    const { id } = req.params

    try {
        const updatedFood = await Food.findByIdAndUpdate(id, {
            $set: req.body
        })

        res.status(200).json(updatedFood)
    } catch (error) {
        next(createError(`El producto con el id ${id} no existe`, 500))
    }
}

export const deleteFood = async (req: Request, res: Response, next: any) => {
    const { id } = req.params
    try {
        const deletedFood = await Food.findByIdAndDelete(id)
        res.status(200).json(deletedFood)
    } catch (error) {
        next(createError(`El producto con el id ${id} no existe`, 500))
    }
}