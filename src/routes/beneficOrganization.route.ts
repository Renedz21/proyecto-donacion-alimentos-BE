import express from 'express'
import { createBeneficOrganization, deleteBeneficOrganization, getBeneficOrganizationById, getBeneficOrganizations, updateBeneficOrganization } from '../controllers/beneficOrganization.controller'
import { verifyTokenAndAdmin } from '../utils/verifyToken'

const router = express.Router()

router.get('/', getBeneficOrganizations)
router.get('/:id', getBeneficOrganizationById)
router.post('/', createBeneficOrganization)
router.put('/:id', verifyTokenAndAdmin, updateBeneficOrganization)
router.delete('/:id', verifyTokenAndAdmin, deleteBeneficOrganization)

export default router