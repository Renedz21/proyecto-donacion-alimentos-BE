import { Request, Response } from 'express'
import Food from '../models/food.schema'
import { createError } from '../utils/createError'
import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

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
    const photoURL = await cloudinary.uploader.upload(photoUrl);

    try {

        const food = await Food.create({
            name,
            description,
            nutritionFacts,
            expirationDate,
            quantity,
            status,
            photoUrl: photoURL.url,
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