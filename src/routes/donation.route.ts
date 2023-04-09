import express from 'express'
import { createDonation, deleteDonation, getDonations, getDonationById, updateDonation } from '../controllers/donation.controller'
import { verifyToken } from '../utils/verifyToken'

const router = express.Router()

router.get('/', verifyToken, getDonations)
router.get('/:id', verifyToken, getDonationById)
router.post('/', verifyToken, createDonation)
router.put('/:id', verifyToken, updateDonation)
router.delete('/:id', verifyToken, deleteDonation)

export default router