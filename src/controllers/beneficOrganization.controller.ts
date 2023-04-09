import { Response, Request } from 'express'
import BeneficOrganization from '../models/beneficOrganization.schema'
import { createError } from '../utils/createError'
import { uploadImage } from '../utils/uploadImage'

export const getBeneficOrganizations = async (_req: Request, res: Response, next: any) => {
    try {
        const data = await BeneficOrganization.find();
        res.status(200).json(data)
    } catch (error) {
        next(createError('Error al obtener las organizaciones benéficas', 500))
    }
}

export const getBeneficOrganizationById = async (req: Request, res: Response, next: any) => {
    const { id } = req.params
    try {
        const data = await BeneficOrganization.findById(id)

        if (!data) {
            next(createError('Organización benéfica no encontrada', 404))
        }
        res.status(200).json(data)
    } catch (error) {
        next(createError(`La organización con ${id} no existe`, 500))
    }
}

export const createBeneficOrganization = async (req: Request, res: Response, next: any) => {
    try {

        const { name, address, phone, photoUrl } = req.body

        const photoURL = await uploadImage(photoUrl, 'benefic-organizations')
        const data = await BeneficOrganization.create({
            name,
            address,
            phone,
            photoUrl: photoURL
        })

        res.status(201).json(data)

    } catch (error) {
        next(createError('Error al crear la Organización Benéfica', 500))
    }
}

export const updateBeneficOrganization = async (req: Request, res: Response, next: any) => {

    const { id } = req.params

    try {
        const { name, address, phone, photoUrl } = req.body

        if (!id) return next(createError('No se envió el id de la Organización Benéfica', 400))

        const photoURL = await uploadImage(photoUrl, 'benefic-organizations')

        const data = await BeneficOrganization.findByIdAndUpdate(id, {
            $set: {
                name,
                address,
                phone,
                photoUrl: photoURL
            }
        }, { new: true })

        res.status(200).json(data)
    } catch (error) {
        next(createError(`Error al actualizar la organización con id ${id}`, 500))
    }
}

export const deleteBeneficOrganization = async (req: Request, res: Response, next: any) => {
    const { id } = req.params
    try {
        if (!id) return next(createError('No se envió el id de la Organización Benéfica', 400))

        const data = await BeneficOrganization.findByIdAndDelete(id)

        res.status(200).json(data)

    } catch (error) {
        next(createError(` Error al eliminar la organización ${id} `, 500))
    }
}