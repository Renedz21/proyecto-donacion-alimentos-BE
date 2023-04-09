import { Request, Response } from 'express';
import Donation from '../models/donation.schema'
import { createError } from '../utils/createError'

export const getDonations = async (_req: Request, res: Response, next: any) => {
    try {
        const donations = await Donation.find();

        res.status(200).json(donations)
    } catch (error) {
        next(createError('Ocurrio un error al obtener las donaciones', 500))
    }
}

export const getDonationById = async (req: Request, res: Response, next: any) => {

    const { id } = req.params
    try {
        const donation = await Donation.findById(id)

        if (!donation) {
            next(createError(`La donación con id ${id} no existe`, 404))
        }

        res.status(200).json(donation)
    } catch (error) {
        next(createError(`La donación con id ${id} no existe`, 500))
    }
}

export const createDonation = async (req: Request, res: Response, next: any) => {
    try {

        const { storeId, beneficOrganizationId, quantity, donationDate } = req.body

        const donation = await Donation.create({
            storeId,
            beneficOrganizationId,
            quantity,
            donationDate
        })

        res.status(201).json(donation)
    } catch (error) {
        next(createError('Error al crear la donación', 500))
    }
}

export const updateDonation = async (req: Request, res: Response, next: any) => {

    const { id } = req.params

    try {

        const { storeId, beneficOrganizationId, quantity, donationDate } = req.body

        if (!id) return next(createError('No se envió el id de la donación', 400))

        const donation = await Donation.findByIdAndUpdate(id, {
            $set: {
                storeId,
                beneficOrganizationId,
                quantity,
                donationDate
            }
        })

        res.status(200).json(donation)
    } catch (error) {
        next(createError('Error al actualizar la donación', 500))
    }
}

export const deleteDonation = async (req: Request, res: Response, next: any) => {
    try {
        const { id } = req.params
        const donationDeleted = await Donation.findByIdAndDelete(id)
        res.status(200).json(donationDeleted)
    } catch (error) {
        next(createError('Error al borrar la donación', 500))
    }
}