import { Request, Response } from 'express';
import Donation from '../models/donation.schema'
import { createError } from '../utils/createError'

export const getDonations = async (_req: Request, res: Response, next: any) => {
    try {
        const donations = await Donation.find();

        res.status(200).json(donations)
    } catch (error) {
        next(createError('', 500))
    }
}

export const getDonationById = async (req: Request, res: Response, next: any) => {
    try {

        res.status(200).json({})
    } catch (error) {
        next(createError('', 500))
    }
}

export const createDonation = async (req: Request, res: Response, next: any) => {
    try {

        res.status(200).json({})
    } catch (error) {
        next(createError('', 500))
    }
}

export const updateDonation = async (req: Request, res: Response, next: any) => {
    try {

        res.status(200).json({})
    } catch (error) {
        next(createError('', 500))
    }
}

export const deleteDonation = async (req: Request, res: Response, next: any) => {
    try {

        res.status(200).json({})
    } catch (error) {
        next(createError('', 500))
    }
}