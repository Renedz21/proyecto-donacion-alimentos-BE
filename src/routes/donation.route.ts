import express from 'express'
import { createDonation, deleteDonation, getDonations, getDonationById, updateDonation } from '../controllers/donation.controller'

const router = express.Router()

router.get('/', getDonations)
router.get('/:id', getDonationById)
router.post('/', createDonation)
router.put('/:id', updateDonation)
router.delete('/:id', deleteDonation)

export default router